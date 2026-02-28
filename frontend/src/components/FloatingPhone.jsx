import { Phone } from "lucide-react";

export const FloatingPhone = () => {
  return (
    <>
      {/* WhatsApp Button - All screens */}
      <a
        href="https://wa.me/994773204033?text=Salam,%20yükdaşıma%20xidməti%20haqqında%20məlumat%20almaq%20istəyirəm"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="floating-whatsapp-btn"
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp ilə yazın"
      >
        <img 
          src="https://customer-assets.emergentagent.com/job_baku-moving/artifacts/oois4l5h_unnamed%20%281%29.png" 
          alt="WhatsApp"
          className="w-14 h-14"
        />
      </a>

      {/* Phone Button - Mobile only */}
      <a
        href="tel:+994773204033"
        data-testid="floating-phone-btn"
        className="floating-phone md:hidden"
        aria-label="Zəng et"
      >
        <Phone className="w-7 h-7" strokeWidth={2} />
      </a>
    </>
  );
};

export default FloatingPhone;
