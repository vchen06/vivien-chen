const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
         
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 5 years of experience in web development, I've had the privilege of working 
              with diverse teams and tackling challenging projects that push the boundaries of what's possible.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I started my journey as a curious developer who loved solving problems through code. 
              Today, I specialize in creating scalable, user-focused applications that make a real impact.
            </p>
           
          </div>
          
          <div className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-semibold mb-6 text-primary">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-4"></div>
                <span className="text-muted-foreground">Frontend Development (React, TypeScript, Tailwind)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-4"></div>
                <span className="text-muted-foreground">Backend Development (Node.js, Python, PostgreSQL)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-4"></div>
                <span className="text-muted-foreground">Cloud Infrastructure (AWS, Docker, CI/CD)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-4"></div>
                <span className="text-muted-foreground">UI/UX Design & Prototyping</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-4"></div>
                <span className="text-muted-foreground">Technical Writing & Documentation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;