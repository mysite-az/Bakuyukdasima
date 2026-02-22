import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section
      data-testid="final-cta-section"
      className="py-20 md:py-32 bg-[#DC2626] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
        <div className="reveal">
          <h2
            data-testid="final-cta-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-6"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Ən Sərfəli və Etibarlı
            <br />
            Yükdaşıma Xidmətini Seçin
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            İndi zəng edin və pulsuz qiymət təklifi alın. Peşəkar komandamız
            sizə kömək etməyə hazırdır!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+994773204033" data-testid="final-cta-call-btn">
              <Button className="bg-white text-[#DC2626] hover:bg-gray-100 px-8 py-6 text-lg font-bold uppercase tracking-wide transition-transform duration-300 hover:scale-105 flex items-center gap-2 rounded-none">
                <Phone className="w-6 h-6" />
                İndi Zəng Edin
              </Button>
            </a>
            <Button
              data-testid="final-cta-contact-btn"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-bold uppercase tracking-wide transition-all duration-300 flex items-center gap-2 rounded-none"
            >
              Əlaqə Formu
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Phone Number Display */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm uppercase tracking-wider mb-2">
              Telefon Nömrəmiz
            </p>
            <a
              href="tel:+994773204033"
              className="text-3xl md:text-4xl font-bold text-white hover:underline"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              +994 77 320 40 33
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
