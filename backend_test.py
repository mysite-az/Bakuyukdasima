import requests
import sys
from datetime import datetime

class BakuMovingAPITester:
    def __init__(self, base_url="https://baku-moving.preview.emergentagent.com"):
        self.base_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.text:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                if response.text:
                    print(f"   Response: {response.text[:200]}...")

            return success, response.json() if response.headers.get('content-type', '').startswith('application/json') else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout (>10s)")
            return False, {}
        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection error")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        success, response = self.run_test(
            "API Root",
            "GET",
            "",
            200
        )
        return success

    def test_contact_form_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Təst İstifadəçi",
            "phone": "+994 55 123 45 67",
            "service_type": "ev",
            "message": "Bu bir test mesajıdır"
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,
            data=test_data
        )
        return success, response.get('id') if success else None

    def test_get_contacts(self):
        """Test getting contacts"""
        success, response = self.run_test(
            "Get Contacts",
            "GET",
            "contacts",
            200
        )
        return success

    def test_status_check_creation(self):
        """Test status check creation"""
        test_data = {
            "client_name": "Təst Müştəri"
        }
        
        success, response = self.run_test(
            "Status Check Creation",
            "POST",
            "status",
            200,
            data=test_data
        )
        return success, response.get('id') if success else None

    def test_get_status_checks(self):
        """Test getting status checks"""
        success, response = self.run_test(
            "Get Status Checks",
            "GET",
            "status",
            200
        )
        return success

    def test_contact_validation(self):
        """Test contact form validation with missing required fields"""
        # Test missing name
        test_data = {
            "phone": "+994 55 123 45 67",
            "service_type": "ev",
            "message": "Test message"
        }
        
        success, response = self.run_test(
            "Contact Form Validation (Missing Name)",
            "POST",
            "contact",
            422,  # Expecting validation error
            data=test_data
        )
        
        # Test missing phone
        test_data2 = {
            "name": "Test User",
            "service_type": "ev",
            "message": "Test message"
        }
        
        success2, response2 = self.run_test(
            "Contact Form Validation (Missing Phone)",
            "POST",
            "contact",
            422,
            data=test_data2
        )
        
        # Test missing service_type
        test_data3 = {
            "name": "Test User",
            "phone": "+994 55 123 45 67",
            "message": "Test message"
        }
        
        success3, response3 = self.run_test(
            "Contact Form Validation (Missing Service Type)",
            "POST",
            "contact",
            422,
            data=test_data3
        )
        
        return success or success2 or success3  # At least one validation should work

def main():
    print("🚀 Starting Baku Moving Service API Tests")
    print("=" * 50)
    
    # Setup
    tester = BakuMovingAPITester()

    # Test API connectivity
    print("\n📡 Testing API Connectivity...")
    if not tester.test_api_root():
        print("❌ API is not accessible, stopping tests")
        return 1

    # Test contact form functionality
    print("\n📝 Testing Contact Form...")
    contact_success, contact_id = tester.test_contact_form_submission()
    if contact_success:
        print(f"   Created contact with ID: {contact_id}")
    
    # Test contacts retrieval
    tester.test_get_contacts()
    
    # Test status check functionality  
    print("\n📊 Testing Status Check...")
    status_success, status_id = tester.test_status_check_creation()
    if status_success:
        print(f"   Created status check with ID: {status_id}")
        
    # Test status checks retrieval
    tester.test_get_status_checks()
    
    # Test validation
    print("\n🔍 Testing Form Validation...")
    tester.test_contact_validation()

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print(f"⚠️  {tester.tests_run - tester.tests_passed} tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())