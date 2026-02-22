import { Shield, Clock, Award, Wrench, Wallet, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const advantages = [
  {
    icon: Award,
    title: "Təcrübəli Komanda",
    description: "10+ illik təcrübə ilə peşəkar və işini bilən heyət.",
  },
  {
    icon: Shield,
    title: "100% Təhlükəsizlik",
    description: "Əşyalarınızın sığortalı və təhlükəsiz daşınmasına zəmanət.",
  },
  {
    icon: Clock,
    title: "Sürətli Xidmət",
    description: "Vaxtında və sürətli daşınma xidməti təqdim edirik.",
  },
  {
    icon: Wrench,
    title: "Müasir Avadanlıq",
    description: "Ən son texnologiya və avadanlıqlarla təchiz olunmuşuq.",
  },
  {
    icon: Wallet,
    title: "Rəqabətli Qiymətlər",
    description: "Münasib qiymətlərlə yüksək keyfiyyətli xidmət.",
  },
  {
    icon: HeadphonesIcon,
    title: "7/24 Dəstək",
    description: "Həftənin hər günü, günün istənilən saatında xidmətinizdəyik.",
  },
];

export const WhyUsSection = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="why-us"
      data-testid="why-us-section"
      className="py-20 md:py-32 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="reveal">
            <span className="inline-block text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-4">
              Niyə Bizi Seçməlisiniz
            </span>
            <h2
              data-testid="why-us-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Bakının Ən Etibarlı
              <br />
              <span className="text-[#DC2626]">Yükdaşıma Xidməti</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Baku Yükdaşıma Xidməti olaraq, müştərilərimizin rahatlığını və
              məmnuniyyətini ən ön planda tuturuq. Hər bir daşınma prosesini
              peşəkarlıqla və diqqətlə həyata keçiririk.
            </p>
            <Button
              data-testid="why-us-cta"
              onClick={handleScrollToContact}
              className="btn-primary"
            >
              Xidmət Sifariş Et
            </Button>
          </div>

          {/* Right - Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={advantage.title}
                data-testid={`advantage-card-${index}`}
                className="reveal p-6 bg-zinc-50 border border-gray-100 group hover:bg-white hover:border-[#DC2626]/20 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="why-us-icon mb-4 group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300">
                  <advantage.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 uppercase tracking-tight mb-2"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
