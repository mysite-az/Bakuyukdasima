import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Ana Səhifə", href: "#hero" },
  { label: "Xidmətlər", href: "#services" },
  { label: "Proses", href: "#process" },
  { label: "Niyə Biz", href: "#why-us" },
  { label: "Şərhlər", href: "#testimonials" },
  { label: "Əlaqə", href: "#contact" },
];

export const Header = ({ scrollY }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-header shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            data-testid="logo"
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-[#DC2626] flex items-center justify-center">
              <span className="text-white font-bold text-xl font-['Oswald']">B</span>
            </div>
            <span
              className={`font-['Oswald'] font-bold text-lg uppercase tracking-tight hidden sm:block transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Baku Yükdaşıma
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                data-testid={`nav-${item.href.replace("#", "")}`}
                className={`text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-[#DC2626] ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+994773204033"
              data-testid="header-phone"
              className={`hidden md:flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+994 77 320 40 33</span>
            </a>
            <Button
              data-testid="header-cta"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:flex btn-primary text-sm"
            >
              Pulsuz Məsləhət
            </Button>

            {/* Mobile Menu Button */}
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            data-testid="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in"
          >
            <nav className="flex flex-col py-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  data-testid={`mobile-nav-${item.href.replace("#", "")}`}
                  className="px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 hover:text-[#DC2626] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-6 py-4 border-t border-gray-100 mt-2">
                <a
                  href="tel:+994773204033"
                  className="flex items-center gap-2 text-[#DC2626] font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>+994 77 320 40 33</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
