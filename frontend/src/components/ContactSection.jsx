import { useState } from "react";
import { Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const serviceTypes = [
  { value: "ev", label: "Ev köçürülməsi" },
  { value: "ofis", label: "Ofis köçürülməsi" },
  { value: "mebel", label: "Mebel ustası" },
  { value: "isci", label: "İşçi qüvvəsi" },
  { value: "masin", label: "Tək maşın xidməti" },
  { value: "qablasma", label: "Qablaşdırma" },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Ad daxil edilməlidir";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon nömrəsi daxil edilməlidir";
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Düzgün telefon nömrəsi daxil edin";
    }

    if (!formData.service_type) {
      newErrors.service_type = "Xidmət növü seçilməlidir";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Xahiş edirik, bütün tələb olunan sahələri doldurun");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);

      toast.success("Müraciətiniz qəbul edildi! Tezliklə sizinlə əlaqə saxlayacağıq.");

      setFormData({
        name: "",
        phone: "",
        service_type: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Xəta baş verdi. Xahiş edirik, yenidən cəhd edin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-20 md:py-32 bg-zinc-50"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-4">
            Əlaqə
          </span>
          <h2
            data-testid="contact-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight mb-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Bizimlə Əlaqə
            <br />
            <span className="text-[#DC2626]">Saxlayın</span>
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="reveal space-y-8">
            <div>
              <h3
                className="text-2xl font-bold text-gray-900 uppercase tracking-tight mb-6"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Əlaqə Məlumatları
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Suallarınız və ya sifarişləriniz üçün bizimlə əlaqə saxlayın.
                Komandamız sizə kömək etməyə hazırdır.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:+994773204033"
                data-testid="contact-phone-link"
                className="flex items-center gap-4 p-4 bg-white border border-gray-100 hover:border-[#DC2626]/30 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-[#DC2626] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Telefon</p>
                  <p className="text-lg font-semibold text-gray-900">
                    +994 77 320 40 33
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white border border-gray-100">
                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center text-gray-600">
                  <MapPin className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Ünvan</p>
                  <p className="text-lg font-semibold text-gray-900">
                    Bakı şəhəri, Azərbaycan
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white border border-gray-100">
                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center text-gray-600">
                  <Clock className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">İş Saatları</p>
                  <p className="text-lg font-semibold text-gray-900">
                    7/24 - Hər gün
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              data-testid="contact-form"
              className="bg-white p-8 border border-gray-100 space-y-6"
            >
              <h3
                className="text-2xl font-bold text-gray-900 uppercase tracking-tight mb-6"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Müraciət Formu
              </h3>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ad *
                </label>
                <Input
                  type="text"
                  data-testid="contact-name-input"
                  placeholder="Adınızı daxil edin"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`contact-input h-12 rounded-none border-gray-200 focus:border-[#DC2626] focus:ring-[#DC2626]/20 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon *
                </label>
                <Input
                  type="tel"
                  data-testid="contact-phone-input"
                  placeholder="+994 XX XXX XX XX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`contact-input h-12 rounded-none border-gray-200 focus:border-[#DC2626] focus:ring-[#DC2626]/20 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Xidmət Növü *
                </label>
                <Select
                  value={formData.service_type}
                  onValueChange={(value) =>
                    setFormData({ ...formData, service_type: value })
                  }
                >
                  <SelectTrigger
                    data-testid="contact-service-select"
                    className={`h-12 rounded-none border-gray-200 focus:border-[#DC2626] focus:ring-[#DC2626]/20 ${
                      errors.service_type ? "border-red-500" : ""
                    }`}
                  >
                    <SelectValue placeholder="Xidmət növü seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem
                        key={service.value}
                        value={service.value}
                        data-testid={`service-option-${service.value}`}
                      >
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service_type && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.service_type}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mesaj
                </label>
                <Textarea
                  data-testid="contact-message-input"
                  placeholder="Əlavə məlumat və ya suallarınızı yazın..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="contact-input rounded-none border-gray-200 focus:border-[#DC2626] focus:ring-[#DC2626]/20 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                data-testid="contact-submit-btn"
                disabled={isSubmitting}
                className="btn-primary w-full h-14 text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Göndərilir...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Göndər
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
