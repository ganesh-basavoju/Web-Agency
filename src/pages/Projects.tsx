
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const projects = [
    {
      title: "E-commerce Platform for Local Artisans",
      description: "Developed a robust e-commerce platform for local artisans to sell their products online.",
      color: "bg-teal-100",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      category: "E-commerce",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Mobile App for Fitness Tracking",
      description: "Created a mobile app with advanced fitness tracking features and personalized workout plans.",
      color: "bg-green-200",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      category: "Mobile App",
      tech: ["React Native", "Firebase", "Stripe"],
    },
    {
      title: "Web Portal for Educational Resources",
      description: "Designed and built a comprehensive web portal offering a wide range of educational resources.",
      color: "bg-yellow-100",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
      category: "Education",
      tech: ["Next.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Custom CRM for Sales Team",
      description: "Implemented a custom CRM system to streamline sales processes and improve team efficiency.",
      color: "bg-teal-500",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      category: "CRM",
      tech: ["Vue.js", "Laravel", "MySQL"],
    },
  ];

  const filters = [
    { name: "Industry", options: ["All", "E-commerce", "Healthcare", "Education", "Finance"] },
    { name: "Tech Stack", options: ["All", "React", "Vue.js", "Node.js", "Python"] },
    { name: "Project Size", options: ["All", "Small", "Medium", "Large", "Enterprise"] },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful web development projects, showcasing our expertise and 
              commitment to delivering impactful solutions.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {filters.map((filter, index) => (
              <div key={index} className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option value="">{filter.name}</option>
                  {filter.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>{option}</option>
                  ))}
                </select>
                <ChevronRight className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`${project.color} rounded-lg p-6 h-80 flex flex-col justify-between transition-transform group-hover:scale-105`}>
                  <div>
                    <div className="w-full h-32 bg-white rounded-lg mb-4 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{project.title}</h3>
                    <p className={`text-sm mb-4 ${project.color === 'bg-teal-500' ? 'text-white' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className={`text-xs px-2 py-1 rounded ${
                            project.color === 'bg-teal-500' 
                              ? 'bg-white/20 text-white' 
                              : 'bg-white text-gray-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className={`text-sm font-medium ${
                      project.color === 'bg-teal-500' ? 'text-teal-100' : 'text-teal-600'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? "bg-teal-500 hover:bg-teal-600" : ""}
              >
                {index + 1}
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
