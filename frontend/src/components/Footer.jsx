import { Phone, MapPin, Clock } from "lucide-react";

const navigation = [
  { label: "Ana Səhifə", href: "#hero" },
  { label: "Xidmətlər", href: "#services" },
  { label: "Proses", href: "#process" },
  { label: "Niyə Biz", href: "#why-us" },
  { label: "Şərhlər", href: "#testimonials" },
  { label: "Əlaqə", href: "#contact" },
];

const services = [
  "Ev köçürülməsi",
  "Ofis köçürülməsi",
  "Mebel ustası",
  "İşçi qüvvəsi",
  "Tək maşın xidməti",
  "Qablaşdırma",
];

export const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      data-testid="footer"
      className="bg-zinc-900 text-white pt-16 pb-8"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#DC2626] flex items-center justify-center">
                <span className="text-white font-bold text-xl font-['Oswald']">
                  B
                </span>
              </div>
              <span className="font-['Oswald'] font-bold text-lg uppercase tracking-tight text-white">
                Baku Yükdaşıma
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Bakıda professional yükdaşıma, mebel ustası və işçi qüvvəsi
              xidmətləri. Etibarlı və sürətli daşınma.
            </p>
            <a
              href="tel:+994773204033"
              className="inline-flex items-center gap-2 text-[#DC2626] font-semibold hover:text-red-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +994 77 320 40 33
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-lg font-bold uppercase tracking-tight mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Səhifələr
            </h4>
            <nav className="space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-lg font-bold uppercase tracking-tight mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Xidmətlər
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-lg font-bold uppercase tracking-tight mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Əlaqə
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#DC2626] mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Telefon</p>
                  <a
                    href="tel:+994773204033"
                    className="text-white hover:text-[#DC2626] transition-colors"
                  >
                    +994 77 320 40 33
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#DC2626] mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Ünvan</p>
                  <p className="text-white">Bakı şəhəri, Azərbaycan</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#DC2626] mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">İş Saatları</p>
                  <p className="text-white">7/24 - Hər gün</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Baku Yükdaşıma Xidməti. Bütün hüquqlar
              qorunur.
            </p>
            <p className="text-gray-500 text-sm">
              Bakı, Azərbaycan | Sürətli və Etibarlı Yükdaşıma
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
