/** @format */

import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform", 
    description:
    "A fully-featured e-commerce platform built on Next.js and Node.js. It includes user authentication, a product management system (CMS), and secure payment processing (Stripe). The interface is developed using TypeScript and TailwindCSS to ensure a fast and responsive user experience.",
    image: "/projects/E-commerce.jpg",
    tags: ["Next.js", "Node.js", "TypeScript", "TailwindCSS",  "Full-Stack","Stripe"],
    demoUrl: "https://ecommerce-frontend-alpha-gray.vercel.app/",
    githubUrl: "https://github.com/ahmedalioo22mm-boop/ecommerce-frontend",
  },
  {
    id: 2,
    title: "Doctor Appointment Booking System",
    description:
 "An integrated system for booking and managing doctor appointments, built on React and Node.js. It provides an easy-to-use interface for both doctors and patients, featuring a responsive layout and attractive design using TailwindCSS.",
    image: "/projects/doctor.jpg",
    tags: [
      "React",
      "Node.js",
      "TailwindCSS",
      "Full-Stack",
      "Appointment Booking",
    ],
    demoUrl: "https://doctor-frontend-ten.vercel.app/",
    githubUrl: "https://github.com/ahmedalioo22mm-boop/doctor-frontend",
  },
  {
    id: 3,
    title: "AuraStore Online Shop",
    description:
      "A responsive multi-page e-commerce website built with pure HTML, CSS, and JavaScript. Features a product catalog and seamless navigation.", // وصف معدّل
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"], // علامات محدّثة
    demoUrl: "https://online-store-one-inky.vercel.app/",
    githubUrl: "https://github.com/ahmedalioo22mm-boop/Online-store",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col" // flex flex-col للمساعدة في ترتيب المحتوى
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                {" "}
                {/* flex-grow لتعبئة المساحة المتاحة */}
                <div className="mb-4">
                  {" "}
                  {/* لفصل المحتوى العلوي عن الأزرار */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {" "}
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
                {/* جزء الأزرار الجديد */}
                <div className="mt-4 flex flex-col items-center gap-3">
                  {" "}
                  {/* gap-3 لإعطاء مسافة بين الزر والأيقونة */}
                  {/* زر Live Preview الآن يأخذ عرض كامل للبطاقة في هذا الجزء */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <ExternalLink size={18} /> {/* حجم أكبر للأيقونة */}
                    Live Preview
                  </a>
                  {/* أيقونة GitHub منفصلة وأصغر تحت زر Live Preview */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-muted" // إضافة بعض التنسيقات للأيقونة
                    aria-label="GitHub Repository" // تحسين إمكانية الوصول
                  >
                    <Github size={24} />{" "}
                    {/* حجم أكبر لأيقونة GitHub لتكون واضحة */}
                  </a>
                </div>
                {/* نهاية جزء الأزرار الجديد */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ahmedalioo22mm-boop"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
