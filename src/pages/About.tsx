
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "50+", label: "Projects Completed" },
    { icon: <Award className="w-8 h-8" />, number: "25+", label: "Happy Clients" },
    { icon: <Clock className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Globe className="w-8 h-8" />, number: "10+", label: "Countries Served" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop",
      bio: "With over 10 years in tech leadership, Sarah founded Innovatech to bridge the gap between innovative technology and business success.",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "Michael specializes in full-stack development and has architected scalable solutions for startups to enterprise clients.",
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      bio: "Emily creates intuitive and beautiful user experiences that drive engagement and conversion for our clients.",
    },
    {
      name: "David Kim",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      bio: "David ensures every project is delivered on time and exceeds client expectations through meticulous planning and execution.",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay at the forefront of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.",
    },
    {
      title: "Quality",
      description: "Every line of code we write and every design we create meets the highest standards of quality and performance.",
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring their vision is realized through transparent communication and feedback.",
    },
    {
      title: "Results",
      description: "Our success is measured by the impact we create for our clients' businesses and the value we bring to their operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Innovatech Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate team of developers, designers, and strategists dedicated to transforming 
              ideas into powerful digital experiences that drive business growth.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2019, Innovatech Solutions emerged from a simple belief: that every business deserves 
                access to world-class web development that drives real results. Our founders, having worked at 
                leading tech companies, saw an opportunity to bring enterprise-level expertise to businesses of all sizes.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we're proud to have helped over 50 businesses transform their digital presence, from 
                startups launching their first website to established companies scaling their web applications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to innovation, quality, and client success has made us a trusted partner for 
                businesses looking to thrive in the digital landscape.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help transform your digital presence and drive your business forward.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
