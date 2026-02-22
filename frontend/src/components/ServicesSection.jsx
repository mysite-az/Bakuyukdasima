import { Home, Building2, Hammer, Users, Truck, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Evlərin Daşınması",
    description: "Evinizdəki əşyaların təhlükəsiz və diqqətlə daşınması. Sığortalı xidmət.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Building2,
    title: "Ofislərin Daşınması",
    description: "Ofis avadanlıqlarını diqqətlə və sürətlə daşıyırıq. İş prosesinizi dayandırmadan.",
    color: "from-red-600 to-red-700",
  },
  {
    icon: Hammer,
    title: "Mebel Ustası",
    description: "Mebellərin sökülməsi və quraşdırılması. Peşəkar ustalar tərəfindən.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Users,
    title: "İşçi Qüvvəsi",
    description: "Peşəkar yükgötürmə komandası. Ağır yüklərin daşınması üçün fiziki qüvvə.",
    color: "from-red-600 to-red-700",
  },
  {
    icon: Truck,
    title: "Tək Maşın Xidməti",
    description: "Sadəcə maşınla daşınan yük xidmətləri. Kiçik həcmli yüklər üçün.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Package,
    title: "Qablaşdırma Xidməti",
    description: "Əşyalarınızın təhlükəsiz qablaşdırılması. Xüsusi materiallar ilə.",
    color: "from-red-600 to-red-700",
  },
];

export const ServicesSection = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-20 md:py-32 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-4">
            Xidmətlərimiz
          </span>
          <h2
            data-testid="services-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight mb-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Sizə Lazım Olan Hər Bir
            <br />
            <span className="text-[#DC2626]">Daşınma Xidməti</span>
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-testid={`service-card-${index}`}
              className="reveal service-card bg-white border border-gray-100 p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`service-icon-container mb-6 bg-gradient-to-br ${service.color}`}>
                <service.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3
                className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-3 group-hover:text-[#DC2626] transition-colors duration-300"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <Button
                variant="link"
                onClick={handleScrollToContact}
                className="text-[#DC2626] font-semibold uppercase text-sm tracking-wide p-0 h-auto hover:no-underline group/btn"
              >
                Ətraflı Bax
                <span className="ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
