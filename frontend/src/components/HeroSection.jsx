import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const handleScrollTo = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=2000')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 bg-[#DC2626] rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              7/24 Xidmət
            </span>
          </div>

          {/* Main Heading */}
          <h1
            data-testid="hero-heading"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-[1.1] mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s", fontFamily: "'Oswald', sans-serif" }}
          >
            Baku Yükdaşıma
            <br />
            <span className="text-[#DC2626]">Xidməti</span>
          </h1>

          {/* Subheading */}
          <p
            data-testid="hero-subheading"
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            Bakıda ev, ofis və yük daşıma xidmətləri — sürətli, təhlükəsiz və
            münasib qiymətlərlə! Təcrübəli komanda, operativ xidmət.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="tel:+994773204033" data-testid="hero-call-btn">
              <Button className="btn-primary flex items-center gap-2 text-base px-8 py-6">
                <Phone className="w-5 h-5" />
                İndi Zəng Et
              </Button>
            </a>
            <Button
              data-testid="hero-services-btn"
              onClick={() => handleScrollTo("#services")}
              className="btn-secondary flex items-center gap-2 text-base px-8 py-6"
            >
              Xidmətlərimizi Gör
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white font-['Oswald']">
                10+
              </div>
              <div className="text-white/60 text-sm mt-1">İllik Təcrübə</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white font-['Oswald']">
                5K+
              </div>
              <div className="text-white/60 text-sm mt-1">Razı Müştəri</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white font-['Oswald']">
                100%
              </div>
              <div className="text-white/60 text-sm mt-1">Təhlükəsizlik</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
