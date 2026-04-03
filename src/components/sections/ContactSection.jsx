/** @format */

import { Linkedin, Mail, MapPin, Send, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // منطق التعامل مع ضغطة الإيميل الذكية (موبايل vs كمبيوتر)
  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "mohamed.gamalcode@gmail.com";
    const mailtoHref = `mailto:${email}`;
    const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = mailtoHref;
    } else {
      window.open(gmailHref, "_blank");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    const formData = new FormData(e.target);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast({
          title: "Success! 🎉",
          description: "Your message has been sent. I'll get back to you soon.",
          className: "bg-green-600 text-white border-none",
        });
        e.target.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error! ❌",
        description: "Something went wrong. Please try again or use WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* الجزء الشمال: معلومات التواصل */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email Item */}
              <div
                onClick={handleEmailClick}
                className="flex items-start space-x-4 group cursor-pointer p-4 -m-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
              >
                {/* الأيقونة واخدة لون الـ Primary من الأول */}
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-primary transition-colors">
                    Email
                  </h4>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors block text-sm">
                   mohamed.gamalcode@gmail.com
                  </span>
                </div>
              </div>

              {/* WhatsApp Item */}
              <a
                href="https://wa.me/201159497813"
                target="_blank"
                rel="noreferrer"
                className="flex items-start space-x-4 group cursor-pointer p-4 -m-4 rounded-xl hover:bg-[#25D366]/5 transition-all duration-300 block"
              >
                {/* الأيقونة واخدة لون الواتساب الأخضر من الأول */}
                <div className="p-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 group-hover:bg-[#25D366]/20 transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3 shadow-sm">
                  <WhatsAppIcon size={24} className="text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-[#25D366] transition-colors">
                    WhatsApp
                  </h4>
                  <span className="text-muted-foreground group-hover:text-[#25D366] transition-colors block text-sm">
                    +20 1159497813
                  </span>
                </div>
              </a>

              {/* Location Item */}
              <a
                href="https://www.google.com/maps/place/Cairo,+Cairo+Governorate/@30.0444,31.2357,12z"
                target="_blank"
                rel="noreferrer"
                className="flex items-start space-x-4 group cursor-pointer p-4 -m-4 rounded-xl hover:bg-blue-500/5 transition-all duration-300 block"
              >
                <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                  <MapPin className="h-6 w-6 text-blue-500" />
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-blue-500 transition-colors">
                    Location
                  </h4>
                  <span className="text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 transition-colors block text-sm font-medium">
                    Cairo, Egypt
                  </span>
                </div>
              </a>
            </div>

            {/* Social Connect Links */}
            <div className="pt-8 flex flex-col items-start gap-4">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                Connect With Me
              </h4>
              <div className="flex items-center gap-6 justify-start">
                <a
                  href="https://github.com/Mohamed-Gamal-code"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-gamal-code/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* الجزء اليمين: فورم التواصل */}
          {/* كارت الفورم - تصميم ناعم واحترافي */}
          <div className="bg-white/90 dark:bg-zinc-900/80 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white dark:border-zinc-800 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-8 text-zinc-800 dark:text-zinc-100 flex items-center gap-3">
              Send a Message
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 ml-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 ml-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400"
                  placeholder="example@gmail.com"
                />
              </div>

              {/* Message Content */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 ml-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none min-h-[160px] text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400"
                  placeholder="How can I help you?"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl active:scale-[0.98] group",
                  isSubmitting
                    ? "bg-zinc-300 text-zinc-500 cursor-not-allowed"
                    : "bg-primary text-primary-foreground hover:shadow-primary/40 hover:-translate-y-1"
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
