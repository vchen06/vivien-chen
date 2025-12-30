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
              I'm a computer science major in Cornell University's College of Engineering. I'm excited about building software that works with real-world data and problems. 
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently, I'm super interested in diving into the realms of machine learning and robotics and getting machines to "think" on their own. I love anything to do with autonomous systems -- creating a whole object that can sense, plan, and act all on its own will never not sound cool to me.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              On the nontechnical side, I grew up in the Bay Area, California, and I love skiing, roller coasters, and birds!
            </p>
           
          </div>
          
          <div className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-semibold mb-6 text-primary">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-4"></div>
                <span className="text-muted-foreground">Object-Oriented Programming and Data Structures</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-4"></div>
                <span className="text-muted-foreground">Backend Development (Node.js, React.js, Python, PostgreSQL, Docker)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-4"></div>
                <span className="text-muted-foreground">Robotics (ROS, Lidar, Arduino, CAD)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-4"></div>
                <span className="text-muted-foreground">Machine Learning (Tensorflow, PyTorch, CV, LLMs)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-4"></div>
                <span className="text-muted-foreground">Technical Communication & Leadership</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;