import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Rəşad Əliyev",
    text: "Çox peşəkar və diqqətli xidmət göstərdilər. Evimizi 3 saat ərzində tam təhlükəsiz şəkildə daşıdılar. Mütləq tövsiyə edirəm!",
    service: "Ev köçürülməsi",
  },
  {
    name: "Aynur Məmmədova",
    text: "Ofisimizi köçürərkən çox narahat idik, amma komanda çox sürətli və nizamlı işlədi. Heç bir əşyamıza xətər dəymədi.",
    service: "Ofis köçürülməsi",
  },
  {
    name: "Elşən Hüseynov",
    text: "Mebel ustası xidmətindən istifadə etdim. Bütün mebellərim düzgün sökülüb yenidən quraşdırıldı. Əla iş!",
    service: "Mebel ustası",
  },
  {
    name: "Günel Qasımova",
    text: "Qiymətlər çox münasib idi və xidmət keyfiyyəti yüksək səviyyədə idi. Növbəti dəfə də mütləq sizinlə işləyəcəyəm.",
    service: "Ev köçürülməsi",
  },
  {
    name: "Tural Babayev",
    text: "7/24 dəstək dediklərinin sözünü tutdular. Gecə saatlarında zəng etdim və səhər erkən gəlib işə başladılar.",
    service: "Yük daşıma",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="py-20 md:py-32 bg-zinc-900 text-white"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-4">
            Müştəri Rəyləri
          </span>
          <h2
            data-testid="testimonials-heading"
            className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Müştərilərimiz
            <br />
            <span className="text-[#DC2626]">Nə Deyir?</span>
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-0 md:left-8 z-10">
            <Quote className="w-20 h-20 text-[#DC2626]/20" />
          </div>

          {/* Testimonial Content */}
          <div className="bg-zinc-800 p-8 md:p-12 relative overflow-hidden">
            <div
              key={currentIndex}
              data-testid={`testimonial-${currentIndex}`}
              className="animate-fade-in"
            >
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p
                    className="text-xl font-bold text-white uppercase tracking-tight"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-[#DC2626] text-sm">
                    {testimonials[currentIndex].service}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4 relative z-20">
                  <Button
                    variant="outline"
                    size="icon"
                    data-testid="testimonial-prev"
                    onClick={goToPrevious}
                    className="border-white/20 text-white hover:bg-white/10 hover:text-white relative z-20"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    data-testid="testimonial-next"
                    onClick={goToNext}
                    className="border-white/20 text-white hover:bg-white/10 hover:text-white relative z-20"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#DC2626]/10 pointer-events-none" />
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                data-testid={`testimonial-dot-${index}`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#DC2626] w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
