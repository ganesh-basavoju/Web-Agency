
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Lock, Users, Building, TrendingUp, ShoppingCart, MessageSquare, Globe, Database, Zap, Search, Palette, Monitor, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description: "We craft responsive and modern websites that engage your audience and drive conversions. Our team uses the latest technologies to ensure your site is fast, secure, and optimized for all devices.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      features: ["Responsive Design", "Mobile Optimization", "Security & Performance"],
      clients: ["Startups", "Small Businesses", "Growing Companies"],
      buttonText: "Get Started",
      color: "bg-teal-100",
    },
    {
      title: "Web App & SaaS Development",
      description: "Building scalable web applications and SaaS platforms. We develop dynamic, secure, and user-friendly solutions that grow with your business and enhance customer engagement.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      features: ["Scalable Architecture", "Cloud Integration", "Data Security"],
      clients: ["Enterprises", "Large Corporations", "Tech Companies"],
      buttonText: "View Projects",
      color: "bg-teal-200",
    },
    {
      title: "AI-Powered Chatbot Development",
      description: "Enhance customer service with AI-powered chatbots. We AI chatbots that understand natural language, provide instant support, answer queries, and improve overall user experience.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      features: ["Natural Language Processing", "24/7 Availability", "Seamless Integration"],
      clients: ["Customer-Focused Businesses", "Support Teams", "E-commerce Stores"],
      buttonText: "Get Started",
      color: "bg-gray-100",
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces that provide exceptional user experiences. Our design experts focus on usability, accessibility, and visual appeal to deliver outstanding user experiences.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      features: ["User-Centric Design", "Visual Aesthetics", "Usability Testing"],
      clients: ["Any Business", "Product Teams", "Marketing Departments"],
      buttonText: "View Projects",
      color: "bg-yellow-100",
    },
    {
      title: "E-commerce Solutions",
      description: "Comprehensive end-to-end e-commerce solutions with custom functionalities. We create platforms with advanced inventory management, payment gateways, customer management, and detailed customer segmentation.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      features: ["Payment Integration", "Inventory Management", "Shopping Solutions"],
      clients: ["Retail Businesses", "Online Stores", "Direct-to-Consumer Brands"],
      buttonText: "Get Started",
      color: "bg-blue-100",
    },
    {
      title: "Maintenance & SEO",
      description: "Keep your website running smoothly and optimize for search engines. We offer ongoing support, updates, security monitoring, and optimization to ensure your online success.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      features: ["Regular Updates", "SEO Optimization", "Security Monitoring"],
      clients: ["All Businesses", "Website Owners", "Marketing Teams"],
      buttonText: "Learn More",
      color: "bg-green-100",
    },
  ];

  const heroFeatures = [
    { icon: <Code className="w-6 h-6" />, text: "Responsive Design" },
    { icon: <Smartphone className="w-6 h-6" />, text: "Mobile Optimization" },
    { icon: <Lock className="w-6 h-6" />, text: "Security & Performance" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Crafting Digital Experiences That Drive Success
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We specialize in creating innovative web solutions tailored to your business needs. From start-to-finish solutions for 
              powerful web applications, we bring your vision to life.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Services</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            We offer comprehensive web development services to help your business thrive in the digital world.
          </p>
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`${service.color} rounded-lg p-8 h-80 flex items-center justify-center`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900">Ideal Clients</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.clients.map((client, clientIndex) => (
                        <div key={clientIndex} className="flex items-center">
                          <Users className="w-4 h-4 text-teal-500 mr-2" />
                          <span className="text-gray-600 text-sm">{client}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    {service.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
