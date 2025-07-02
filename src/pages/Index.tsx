
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronRight, Clock, Headphones, Calendar } from "lucide-react";

const Index = () => {
  const trustedCompanies = [
    { name: "TechCorp", logo: "TC" },
    { name: "GlobalRetail", logo: "GR" },
    { name: "HealthFirst", logo: "HF" },
    { name: "EduConnect", logo: "EC" },
    { name: "FinServe", logo: "FS" },
  ];

  const services = [
    {
      title: "Website Development",
      description: "Creating responsive and modern websites that captivate your audience.",
      icon: "💻",
    },
    {
      title: "Web Apps",
      description: "Building dynamic web applications for your specific business needs.",
      icon: "📱",
    },
    {
      title: "SaaS Development",
      description: "Developing backend SaaS platforms to scale your operations.",
      icon: "⚙️",
    },
    {
      title: "AI Chatbots",
      description: "Integrating AI-powered chatbots to enhance customer engagement.",
      icon: "🤖",
    },
    {
      title: "E-commerce",
      description: "Creating seamless e-commerce platforms to drive sales and grow your business.",
      icon: "🛒",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and user-centered interfaces to deliver exceptional user experiences.",
      icon: "🎨",
    },
  ];

  const projects = [
    {
      title: "Project Zenith",
      description: "A cutting-edge e-commerce platform for a leading fashion brand.",
      color: "bg-teal-100",
    },
    {
      title: "Project Horizon",
      description: "A dynamic web application for a healthcare provider.",
      color: "bg-teal-500",
    },
    {
      title: "Project Nebula",
      description: "A sleek and responsive website for a tech startup.",
      color: "bg-teal-600",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "We deliver projects on time without compromising quality.",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Post-Launch Support",
      description: "Comprehensive support and maintenance after project completion.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "5+ Years Experience",
      description: "Proven track record with over 5 years in web development.",
    },
  ];

  const testimonials = [
    {
      name: "Sophia Carter",
      role: "CEO, TechStart",
      rating: 5,
      text: "Innovatech Solutions delivered a stunning website that perfectly captures our brand identity. Their professionalism and attention to detail are unmatched.",
    },
    {
      name: "Ethan Bennett",
      role: "Product Manager",
      rating: 5,
      text: "We were impressed by the speed and efficiency of Innovatech Solutions. They built a complex web application that exceeded our expectations.",
    },
    {
      name: "Olivia Hayes",
      role: "Marketing Director",
      rating: 5,
      text: "The team at Innovatech Solutions is incredibly talented and responsive. They provided excellent support throughout the entire process.",
    },
  ];

  const techStack = [
    { name: "React", logo: "⚛️" },
    { name: "Node.js", logo: "🟢" },
    { name: "Next.js", logo: "▲" },
    { name: "MongoDB", logo: "🍃" },
    { name: "Firebase", logo: "🔥" },
    { name: "Stripe", logo: "💳" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                We Build Scalable, Stunning Web Experiences
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your ideas into cutting-edge web development solutions. From sleek websites to complex web 
                applications, we bring your vision to life with our expertise and creativity.
              </p>
              <Link to="/services">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
                  Explore Our Services
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-teal-500 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-lg">{company.logo}</span>
                </div>
                <span className="text-sm text-gray-600">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`${project.color} rounded-lg p-8 h-64 flex flex-col justify-center transition-transform group-hover:scale-105`}>
                  <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                  <p className="text-white/90">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/projects">
              <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                View All Projects
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center mb-4 text-2xl">
                  {tech.logo}
                </div>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to elevate your online presence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's work together to create something amazing that drives results for your business.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
            Let's Build Something Together
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
