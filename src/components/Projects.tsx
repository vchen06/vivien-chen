import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: "critterworld",
      title: "Critterworld: Artificial Life Simulator",
      description: "An app that simulates a world of critters that act autonomously according to unique “genomes”, completing tasks such as eating, reproducing, and traveling.",
      technologies: ["Java", "JavaFX", "Threads", "MVC"],
      image: "🦎"
    },
    {
      id: "task-management-app",
      title: "PoseGuru: Automated Yoga Instructor",
      description: "An assistive yoga app to help users practice yoga correctly at home by providing a workout to follow and real-time feedback on poses.",
      technologies: ["Python", "OpenCV", "Tkinter", "scikit-learn", "MediaPipe"],
      image: "🧘"
    },
    {
      id: "weather-analytics-dashboard",
      title: "Flood Forecast Model",
      description: "A Long Short-Term Memory (LSTM) neural network machine learning model in Python that predicts water levels based on precipitation and water level data from the Mississippi River.",
      technologies: ["Python", "scikit-learn", "Keras", "Pandas", "NumPy"],
      image: "🌤️"
    },
    {
      id: "loom",
      title: "Multi-Process Loom",
      description: "An automated multi-axis loom machine capable of achieving user-requested 3D weaving, knitting, and braiding patterns.",
      technologies: ["C++", "Arduino", "Python"],
      image: "🧶"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
         
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="glass-card p-8 hover-lift group">
              <div className="text-6xl mb-6 text-center opacity-80">
                {project.image}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-primary group-hover:text-primary-glow transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Link 
                  to={`/projects/${project.id}`}
                  onClick={() => {
                    // Scroll to top when navigating to project detail
                    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                  }}
                >
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 text-foreground hover:bg-primary/10 flex items-center gap-2"
                  >
                    View Details
                  </Button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;