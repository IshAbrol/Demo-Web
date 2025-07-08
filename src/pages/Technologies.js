import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaGitAlt, FaDatabase, FaMobile, FaCloud, FaBrain, FaShieldAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiKubernetes, SiTensorflow, SiMongodb, SiPostgresql, SiRedis, SiFlutter, SiKotlin, SiSwift } from 'react-icons/si';

const Technologies = () => {
  const categories = [
    {
      title: 'Frontend Technologies',
      icon: FaReact,
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React', icon: FaReact, level: 95, description: 'Modern component-based UI library' },
        { name: 'TypeScript', icon: SiTypescript, level: 90, description: 'Strongly typed JavaScript superset' },
        { name: 'JavaScript', icon: SiJavascript, level: 98, description: 'Core web programming language' },
        { name: 'Vue.js', icon: FaReact, level: 85, description: 'Progressive JavaScript framework' },
        { name: 'Angular', icon: FaReact, level: 80, description: 'Full-featured TypeScript framework' },
        { name: 'Next.js', icon: FaReact, level: 92, description: 'Production-ready React framework' }
      ]
    },
    {
      title: 'Backend Technologies',
      icon: FaNodeJs,
      color: 'from-green-500 to-teal-500',
      technologies: [
        { name: 'Node.js', icon: FaNodeJs, level: 95, description: 'JavaScript runtime environment' },
        { name: 'Python', icon: FaPython, level: 93, description: 'Versatile programming language' },
        { name: 'Java', icon: FaJava, level: 88, description: 'Enterprise-grade programming language' },
        { name: 'Django', icon: FaPython, level: 85, description: 'High-level Python web framework' },
        { name: 'Flask', icon: FaPython, level: 90, description: 'Lightweight Python web framework' },
        { name: 'Spring Boot', icon: FaJava, level: 82, description: 'Java framework for microservices' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: FaMobile,
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'React Native', icon: FaReact, level: 90, description: 'Cross-platform mobile development' },
        { name: 'Flutter', icon: SiFlutter, level: 85, description: 'Google\'s UI toolkit for mobile' },
        { name: 'Swift', icon: SiSwift, level: 88, description: 'Native iOS development language' },
        { name: 'Kotlin', icon: SiKotlin, level: 87, description: 'Modern Android development language' },
        { name: 'Firebase', icon: FaDatabase, level: 90, description: 'Backend-as-a-service platform' },
        { name: 'Expo', icon: FaReact, level: 85, description: 'React Native development platform' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: FaCloud,
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'AWS', icon: FaAws, level: 92, description: 'Amazon Web Services cloud platform' },
        { name: 'Docker', icon: FaDocker, level: 90, description: 'Containerization platform' },
        { name: 'Kubernetes', icon: SiKubernetes, level: 85, description: 'Container orchestration system' },
        { name: 'Jenkins', icon: FaGitAlt, level: 88, description: 'Continuous integration server' },
        { name: 'Terraform', icon: FaCloud, level: 82, description: 'Infrastructure as code tool' },
        { name: 'GitLab CI/CD', icon: FaGitAlt, level: 87, description: 'Continuous integration platform' }
      ]
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      color: 'from-indigo-500 to-purple-500',
      technologies: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 92, description: 'Advanced relational database' },
        { name: 'MongoDB', icon: SiMongodb, level: 90, description: 'NoSQL document database' },
        { name: 'Redis', icon: SiRedis, level: 85, description: 'In-memory data structure store' },
        { name: 'MySQL', icon: FaDatabase, level: 88, description: 'Popular relational database' },
        { name: 'BigQuery', icon: FaDatabase, level: 80, description: 'Google\'s data warehouse' },
        { name: 'Snowflake', icon: FaDatabase, level: 78, description: 'Cloud data platform' }
      ]
    },
    {
      title: 'AI/ML Technologies',
      icon: FaBrain,
      color: 'from-pink-500 to-rose-500',
      technologies: [
        { name: 'TensorFlow', icon: SiTensorflow, level: 85, description: 'Machine learning framework' },
        { name: 'PyTorch', icon: FaBrain, level: 82, description: 'Deep learning framework' },
        { name: 'OpenAI', icon: FaBrain, level: 88, description: 'AI language models and APIs' },
        { name: 'Hugging Face', icon: FaBrain, level: 85, description: 'NLP models and datasets' },
        { name: 'LangChain', icon: FaBrain, level: 80, description: 'Framework for LLM applications' },
        { name: 'MLflow', icon: FaBrain, level: 78, description: 'ML lifecycle management' }
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      level: 'Professional',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      level: 'Professional',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Microsoft Azure Expert',
      issuer: 'Microsoft',
      level: 'Expert',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      name: 'Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      level: 'Certified',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const methodologies = [
    {
      name: 'Agile Development',
      description: 'Iterative development with regular feedback loops',
      icon: FaGitAlt
    },
    {
      name: 'DevOps Practices',
      description: 'Continuous integration and deployment',
      icon: FaCloud
    },
    {
      name: 'Test-Driven Development',
      description: 'Writing tests before implementation',
      icon: FaShieldAlt
    },
    {
      name: 'Microservices Architecture',
      description: 'Scalable, distributed system design',
      icon: FaDatabase
    }
  ];

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
              Our <span className="gradient-text">Technology Stack</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and proven methodologies to deliver 
              robust, scalable, and maintainable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies by Category */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                      className="glass-effect p-6 rounded-xl card-hover"
                    >
                      <div className="flex items-center mb-4">
                        <tech.icon className="h-8 w-8 text-blue-400 mr-3" />
                        <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
                      <div className="mb-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Proficiency</span>
                          <span className="text-blue-400">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our team holds prestigious certifications from leading technology providers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center card-hover"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center mx-auto mb-4`}>
                  <FaAws className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                  {cert.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Development Methodologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We follow industry best practices and proven methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center card-hover"
              >
                <method.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{method.name}</h3>
                <p className="text-gray-300 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Excellence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <h3 className="text-xl font-semibold text-white mb-2">Technologies</h3>
              <p className="text-gray-300">Mastered across all domains</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
              <h3 className="text-xl font-semibold text-white mb-2">Certifications</h3>
              <p className="text-gray-300">Industry-recognized credentials</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <h3 className="text-xl font-semibold text-white mb-2">Up-to-date</h3>
              <p className="text-gray-300">Latest technology versions</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <h3 className="text-xl font-semibold text-white mb-2">Learning</h3>
              <p className="text-gray-300">Continuous skill development</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;