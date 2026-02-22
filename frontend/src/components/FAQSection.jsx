import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Daşınma xidmətinin qiyməti necə hesablanır?",
    answer:
      "Qiymət yükün həcmi, daşınma məsafəsi və tələb olunan əlavə xidmətlərə (mebel sökülməsi, qablaşdırma və s.) əsasən hesablanır. Pulsuz qiymətləndirmə üçün bizimlə əlaqə saxlaya bilərsiniz.",
  },
  {
    question: "Əşyalarımın təhlükəsizliyinə zəmanət varmı?",
    answer:
      "Bəli, bütün daşınma xidmətlərimiz sığortalıdır. Əşyalarınız peşəkar qablaşdırma materialları ilə qorunur və təcrübəli komandamız tərəfindən diqqətlə daşınır.",
  },
  {
    question: "Nə qədər əvvəldən sifariş verməliyəm?",
    answer:
      "Ən azı 1-2 gün əvvəl sifariş verməyiniz tövsiyə olunur. Lakin təcili daşınma xidmətləri də mövcuddur - eyni gün xidmət üçün bizimlə əlaqə saxlayın.",
  },
  {
    question: "Həftə sonları və bayram günləri işləyirsinizmi?",
    answer:
      "Bəli, 7/24 xidmət göstəririk. Həftə sonları və bayram günləri də daxil olmaqla hər zaman xidmətinizdəyik.",
  },
  {
    question: "Hansı ödəniş üsullarını qəbul edirsiniz?",
    answer:
      "Nağd, bank kartı və bank köçürməsi ilə ödəniş qəbul edirik. Ödəniş xidmət tamamlandıqdan sonra həyata keçirilir.",
  },
  {
    question: "Mebel sökülməsi və yığılması xidmətə daxildirmi?",
    answer:
      "Mebel ustası xidməti ayrıca sifariş edilə bilər. Əgər kompleks daşınma paketi seçsəniz, bu xidmət endirimli qiymətə əlavə olunur.",
  },
];

export const FAQSection = () => {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="py-20 md:py-32 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-4">
            Tez-tez Verilən Suallar
          </span>
          <h2
            data-testid="faq-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight mb-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Suallarınız
            <br />
            <span className="text-[#DC2626]">Var?</span>
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          className="reveal space-y-4"
          data-testid="faq-accordion"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              data-testid={`faq-item-${index}`}
              className="border border-gray-200 px-6 data-[state=open]:border-[#DC2626]/30 transition-colors duration-300"
            >
              <AccordionTrigger
                data-testid={`faq-trigger-${index}`}
                className="text-left text-lg font-semibold text-gray-900 hover:text-[#DC2626] py-6 [&[data-state=open]]:text-[#DC2626]"
                style={{ fontFamily: "'Oswald', sans-serif", textTransform: "uppercase", letterSpacing: "0.02em" }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                data-testid={`faq-content-${index}`}
                className="text-gray-600 leading-relaxed pb-6"
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
