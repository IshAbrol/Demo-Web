import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaPython, FaAws, FaMobile, FaDesktop, FaDatabase, FaBrain } from 'react-icons/fa';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaDesktop },
    { id: 'web', name: 'Web Apps', icon: FaReact },
    { id: 'mobile', name: 'Mobile Apps', icon: FaMobile },
    { id: 'ai', name: 'AI/ML', icon: FaBrain },
    { id: 'cloud', name: 'Cloud', icon: FaAws },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution with real-time inventory management and payment processing.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: ['Real-time inventory', 'Payment processing', 'Admin dashboard', 'Mobile responsive'],
      client: 'RetailCorp',
      duration: '6 months',
      team: '8 developers',
      results: '300% increase in online sales',
      links: {
        demo: 'https://demo.example.com',
        github: 'https://github.com/example'
      }
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      category: 'web',
      description: 'Comprehensive healthcare management platform for hospitals and clinics.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
      features: ['Patient management', 'Appointment scheduling', 'Medical records', 'HIPAA compliant'],
      client: 'MedTech Solutions',
      duration: '8 months',
      team: '12 developers',
      results: '50% reduction in administrative time',
      links: {
        demo: 'https://demo.example.com'
      }
    },
    {
      id: 3,
      title: 'FinTech Mobile App',
      category: 'mobile',
      description: 'Cross-platform mobile banking application with advanced security features.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Biometric Auth'],
      features: ['Mobile banking', 'Biometric auth', 'Real-time transactions', 'Push notifications'],
      client: 'SecureBank',
      duration: '10 months',
      team: '6 developers',
      results: '1M+ downloads in first year',
      links: {
        demo: 'https://demo.example.com'
      }
    },
    {
      id: 4,
      title: 'AI-Powered Analytics Dashboard',
      category: 'ai',
      description: 'Machine learning platform for business intelligence and predictive analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
      features: ['Predictive analytics', 'Real-time dashboards', 'ML model deployment', 'Data visualization'],
      client: 'DataCorp',
      duration: '12 months',
      team: '10 developers',
      results: '40% improvement in decision making',
      links: {
        demo: 'https://demo.example.com'
      }
    },
    {
      id: 5,
      title: 'IoT Fleet Management',
      category: 'cloud',
      description: 'Cloud-based IoT solution for real-time fleet tracking and management.',
      image: '/api/placeholder/600/400',
      technologies: ['AWS IoT', 'React', 'Node.js', 'DynamoDB', 'Lambda'],
      features: ['Real-time tracking', 'Predictive maintenance', 'Route optimization', 'Mobile app'],
      client: 'FleetTech',
      duration: '7 months',
      team: '9 developers',
      results: '25% reduction in fuel costs',
      links: {
        demo: 'https://demo.example.com'
      }
    },
    {
      id: 6,
      title: 'Learning Management System',
      category: 'web',
      description: 'Online education platform with video streaming and interactive assessments.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'WebRTC', 'AWS S3'],
      features: ['Video streaming', 'Interactive quizzes', 'Progress tracking', 'Certification'],
      client: 'EduTech',
      duration: '9 months',
      team: '11 developers',
      results: '10,000+ active students',
      links: {
        demo: 'https://demo.example.com'
      }
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that have transformed businesses 
              and delighted users worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-glow'
                    : 'glass-effect text-gray-300 hover:text-white hover:bg-white/20'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect rounded-2xl overflow-hidden card-hover"
              >
                <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">
                      {project.category === 'web' && <FaDesktop />}
                      {project.category === 'mobile' && <FaMobile />}
                      {project.category === 'ai' && <FaBrain />}
                      {project.category === 'cloud' && <FaAws />}
                    </div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-400 text-sm font-medium">{project.client}</span>
                    <div className="flex space-x-2">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          className="p-2 glass-effect rounded-lg hover:bg-white/20 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt className="h-4 w-4 text-blue-400" />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="p-2 glass-effect rounded-lg hover:bg-white/20 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="h-4 w-4 text-blue-400" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-blue-400 font-semibold text-sm">Duration</div>
                      <div className="text-gray-300 text-sm">{project.duration}</div>
                    </div>
                    <div>
                      <div className="text-blue-400 font-semibold text-sm">Team Size</div>
                      <div className="text-gray-300 text-sm">{project.team}</div>
                    </div>
                    <div>
                      <div className="text-blue-400 font-semibold text-sm">Results</div>
                      <div className="text-gray-300 text-sm">{project.results}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;