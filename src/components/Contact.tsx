import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's work together to bring your ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Your Name"
                  className="bg-muted/50 border-primary/20 focus:border-primary text-foreground"
                />
              </div>
              
              <div>
                <Input 
                  type="email"
                  placeholder="Your Email"
                  className="bg-muted/50 border-primary/20 focus:border-primary text-foreground"
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Subject"
                  className="bg-muted/50 border-primary/20 focus:border-primary text-foreground"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Your Message"
                  rows={5}
                  className="bg-muted/50 border-primary/20 focus:border-primary text-foreground resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground py-6 text-lg font-semibold glow-effect"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation.
              </p>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>alex@example.com</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
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
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;