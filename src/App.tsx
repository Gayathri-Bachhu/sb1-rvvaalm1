import React from 'react';
import { GitBranch, Pocket as Docker, Cloud, Zap, Shield, Monitor, Mail, Server, Code, CheckCircle, ArrowRight, Github, Play, Settings, Database, Globe, Bell } from 'lucide-react';

function App() {
  const features = [
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Version Control Integration",
      description: "Seamless GitHub integration with automated triggers on code push"
    },
    {
      icon: <Docker className="w-8 h-8" />,
      title: "Docker Containerization",
      description: "Automated Docker image building and registry management"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "CI/CD Pipeline",
      description: "Jenkins-powered continuous integration and deployment"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Automated Testing",
      description: "Integrated unit testing and quality assurance checks"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Deployment",
      description: "Automated deployment to AWS EC2 and other cloud platforms"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Notifications",
      description: "Email and Slack notifications for deployment status"
    }
  ];

  const techStack = [
    { name: "GitHub", icon: <Github className="w-6 h-6" />, category: "Version Control" },
    { name: "Jenkins", icon: <Settings className="w-6 h-6" />, category: "CI/CD" },
    { name: "Docker", icon: <Docker className="w-6 h-6" />, category: "Containerization" },
    { name: "AWS EC2", icon: <Cloud className="w-6 h-6" />, category: "Cloud" },
    { name: "Node.js", icon: <Code className="w-6 h-6" />, category: "Runtime" },
    { name: "Nginx", icon: <Server className="w-6 h-6" />, category: "Web Server" }
  ];

  const objectives = [
    "Automate development to deployment process",
    "Learn DevOps tools practically", 
    "Understand CI/CD pipelines",
    "Practice cloud deployments",
    "Demonstrate real-world workflow"
  ];

  const deliverables = [
    "GitHub repository with complete source code",
    "Comprehensive project documentation (PDF)",
    "IARE formatted PowerPoint presentation", 
    "Live demo video showcase",
    "Infrastructure setup scripts"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-full">
                  <Zap className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AutoDeployPro
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete CI/CD Pipeline Solution for Modern Web Applications
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              A comprehensive DevOps automation system demonstrating continuous integration and 
              deployment workflows. 
              industry-standard practices and tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/25">
                View Live Demo
                <Play className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                Documentation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive automation features that streamline your development workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Industry-leading tools and technologies powering the automation pipeline
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-110">
                <div className="text-purple-400 mb-3 flex justify-center group-hover:text-purple-300 transition-colors">
                  {tech.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pipeline Workflow */}
      <div className="py-24 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">CI/CD Pipeline Workflow</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Automated workflow from code commit to production deployment
            </p>
          </div>
          
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
              {[
                { icon: <Code className="w-8 h-8" />, title: "Code Push", desc: "Developer pushes to GitHub" },
                { icon: <GitBranch className="w-8 h-8" />, title: "Trigger Build", desc: "Jenkins detects changes" },
                { icon: <CheckCircle className="w-8 h-8" />, title: "Run Tests", desc: "Automated testing phase" },
                { icon: <Docker className="w-8 h-8" />, title: "Build Image", desc: "Docker containerization" },
                { icon: <Cloud className="w-8 h-8" />, title: "Deploy", desc: "Push to production" },
                { icon: <Mail className="w-8 h-8" />, title: "Notify", desc: "Success notification" }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full mb-4 shadow-2xl">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm text-center max-w-24">{step.desc}</p>
                  
                  {index < 5 && (
                    <div className="hidden lg:block absolute top-8 left-full w-16 border-t-2 border-dashed border-gray-600"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Objectives & Deliverables */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Objectives */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Project Objectives</h2>
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-400 to-blue-400 p-1 rounded-full mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Deliverables */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Project Deliverables</h2>
              <div className="space-y-4">
                {deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-1 rounded-full mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">{deliverable}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Structure */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Project Structure</h2>
            <p className="text-xl text-gray-400">
              Well-organized repository structure for maintainable code
            </p>
          </div>
          
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`AutoDeployPro/
│
├── webapp/                # Web application source code
│   ├── app.js
│   ├── package.json
│   └── src/
├── Dockerfile             # Docker build instructions  
├── Jenkinsfile           # CI/CD pipeline definition
├── docker-compose.yml    # Multi-container setup
├── README.md            # Project documentation
├── infra/               # Infrastructure scripts
│   ├── deploy.sh
│   └── monitoring/
└── docs/
    ├── Project_Report.pdf
    └── IARE_Presentation.pptx`}
            </pre>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Dive into the complete DevOps automation solution built for academic excellence 
            and industry readiness. Perfect for your IARE practical examination.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-green-500/25">
              <Github className="w-5 h-5 mr-2" />
              View Repository
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-purple-500/25">
              <Monitor className="w-5 h-5 mr-2" />
              Live Dashboard
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Built for IARE DevOps Practical Examination
            </p>
            <p className="text-gray-500 text-sm">
              Demonstrating industry-standard CI/CD practices and modern DevOps workflows
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;