import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin} from 'lucide-react';
import heroBg from '@/assets/hero-bg-cool.jpg';

const Hero = () => {
  const scrollToContact = () => { 
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Hi, I'm{' '}
            <span className="gradient-text">Vivien!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Computer Science Major at Cornell University
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            hihihihi blahlkajdfk;j dkjfldsjfk
          </p> 
           {/* passionate about the intersection of the physical and virtual world, interested in exploring the fields of robotics and machine learning. */}
          
          <div className="flex flex-col gap-6 justify-center items-center">
            <button 
              onClick={scrollToProjects}
              className="relative group cursor-pointer"
            >
              <span className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300">
                View My Work
              </span>
              <div className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-gradient-primary rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <div className="flex gap-4 items-center">
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary"
              >
                <Mail className="w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary"
              >
                <Github className="w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              
           
            </div>
          </div>
        </div>
        
        {/* Subtle Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/40 rounded-full animate-float" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-secondary/30 rounded-full animate-float" 
             style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default Hero;