import { Phone, Calculator, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Əlaqə Yaradın",
    description: "Bizimlə əlaqə saxlayın və ehtiyaclarınızı bildirin. 7/24 xidmətinizdəyik.",
  },
  {
    number: "02",
    icon: Calculator,
    title: "Qiymətləndirmə",
    description: "Yükünüzün həcminə uyğun ödənişsiz qiymət təklifi alın.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Daşınma",
    description: "Təyin olunmuş vaxtda peşəkar komandamız işə başlayır.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Təhvil",
    description: "Əşyalarınız yeni ünvanda təhlükəsiz şəkildə sizə təhvil verilir.",
  },
];

export const ProcessSection = () => {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="py-20 md:py-32 bg-zinc-50"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-4">
            İş Prosesimiz
          </span>
          <h2
            data-testid="process-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight mb-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Bizim İş
            <br />
            <span className="text-[#DC2626]">Prinsiplərimiz</span>
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#DC2626]/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                data-testid={`process-step-${index}`}
                className="reveal relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white p-8 relative z-10 border border-gray-100 h-full group hover:border-[#DC2626]/30 transition-colors duration-300">
                  {/* Step Number */}
                  <div className="step-number absolute top-4 right-4 select-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#DC2626] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-3"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-[#DC2626] flex items-center justify-center text-white">
                      →
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
