import { Phone } from "lucide-react";

export const FloatingPhone = () => {
  return (
    <a
      href="tel:+994773204033"
      data-testid="floating-phone-btn"
      className="floating-phone md:hidden"
      aria-label="Zəng et"
    >
      <Phone className="w-7 h-7" strokeWidth={2} />
    </a>
  );
};

export default FloatingPhone;
