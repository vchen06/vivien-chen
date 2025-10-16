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
              I'm a sophomore at Cornell University College of Engineering studying computer science. I'm excited about building software that works with real-world data and problems. Currently, I'm super interested in diving into the realms of machine learning and robotics and how they can bridge the gap between digital and physical worlds.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              On the nontechnical side, I grew up in the Bay Area, California, and I love skiing, soaking in the sun, roller coasters, and birds!
            </p>
           
          </div>
          
          <div className="glass-card p-8 hover-lift">
  <h3 className="text-2xl font-semibold mb-6 text-primary">What I Do</h3>
  <ul className="gradient-markers list-disc list-inside space-y-3 text-muted-foreground text-base leading-relaxed">
  <li>Object-Oriented Programming and Data Structures</li>
  <li>Backend Development (Node.js, React.js, Python, PostgreSQL, Docker)</li>
  <li>Robotics (ROS, Lidar, Arduino, CAD)</li>
  <li>Machine Learning (TensorFlow, PyTorch, CV)</li>
  <li>Technical Communication & Leadership</li>
</ul>
</div>
        </div>
      </div>
    </section>
  );
};

export default About;