import { useParams, Link } from 'react-router-dom';
import { useEffect } from "react";
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const projects = [
    {
      id: "critterworld",
      title: "Critterworld: Artificial Life Simulator",
      description: "An app that simulates a world of critters that act autonomously according to unique “genomes”, completing tasks such as eating, reproducing, and traveling.",
      gallery: [
        { type: "image", src: "/images/critterworld.png" },
        { type: "text", content: "Critterworld allows users to either upload a custom world or generate a random one, then allows users to upload critters. Users can either simulate the world or increment it by time steps of 1, where the critters act according to their genome programs that are displayed when you click on a critter." },
        { type: "text", content: "Critterworld was made for a half-semester long project for CS2112, in a team of 4. It taught me a lot about in-depth Java and OOP concepts such as threads, MVC architecture, GUI design, and developing clean, scalable code. With so many different components, it's been one of the most challenging projects that I've worked on so far." },
      ]
    },
    {
      id: "yoga",
      title: "PoseGuru: Automated Yoga Instructor",
      description: "An assistive yoga app to help users practice yoga correctly at home by providing a workout to follow and real-time feedback on poses.",
      gallery: [
        { type: "image", src: "/images/pose.png" },
        { type: "image", src: "/images/posestart.png" },
        { type: "text", content: "PoseGuru uses OpenCV and MediaPipe BlazePose for real-time body tracking to detect whether users are holding the correct yoga poses. It has them hold the pose properly for a select amount of time before moving on to the rest of the workout." },
      ]
    },
    {
      id: "flood-forecast",
      title: "Task Management App",
      description: "A collaborative tool with drag-and-drop tasks and real-time updates.",
      gallery: [
        { type: "image", src: "https://via.placeholder.com/800x400" },
        { type: "text", content: "Dashboard view with all tasks across multiple teams." },
        { type: "image", src: "https://via.placeholder.com/800x400" },
        { type: "text", content: "Drag-and-drop task management in action." }
      ]
    },
    {
      id: "loom",
      title: "Multi-Process Loom",
      description: "An automated multi-axis loom machine capable of manufacturing user-requested 3D weaving, knitting, and braiding patterns.",
      gallery: [
        { type: "text", content: " This research project strives to further the abilites of textile manufacturing by creating a machine+design software pipeline akin to 3D printing but for yarn fabrication. I worked under Professor Francois Guimbretiere and PhD student Shuhong Wang to develop the motor control and electronic communication software for the machine and electronic yarn tensioners. I was also involved in the circuit and mechanical design for elements such as the braiding table and comb rotational system."},
        { type: "image", src: "/images/loom1.JPG" },
        { type: "image", src: "/images/loom2.png" },
        { type: "image", src: "/images/loom3.png" }
      ]
    },
    {
      id: "autoboat",
      title: "Cornell AutoBoat",
      description: "Building the computer vision model and LiDAR object detection system as part of a team building an autonomous boat.",
      gallery: [
        { type: "text", content: "" },
        { type: "image", src: "/images/pcl.png" }
      ]
    },
    {
      id: "dtwin",
      title: "Sustainability Digital Twin",
      description: "A webapp containing graphs and Unity simulations with live data representing pollution emissions in NYC boroughs.",
      gallery: [
        { type: "text", content: "" },
        { type: "image", src: "/images/dt1.png" },
        { type: "image", src: "/images/dt2.png" }
      ]
    }
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{project.title}</span>
            </h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Overview</h2>
            <div className="space-y-8">
              {project.gallery?.map((block, index) => {
                if (block.type === "image") {
                  // Special styling for yoga project images
                  if (project.id === "yoga" || project.id === "dtwin") {
                    return (
                      <img
                        key={index}
                        src={block.src}
                        alt={`Project ${index + 1}`}
                        className="w-[27rem] h-auto inline-block mr-2 mb-2 rounded-lg"
                      />
                    );
                  } else if (project.id === "loom") {
                    return (
                      <img
                        key={index}
                        src={block.src}
                        alt={`Project ${index + 1}`}
                        className="w-[18rem] h-auto inline-block mr-2 mb-2 rounded-lg"
                      />
                    );
                  }
                  else {
                    return (
                      <img 
                        key={index}
                        src={block.src} 
                        alt={`Project ${index + 1}`} 
                        className="w-full h-auto object-cover rounded-lg" 
                      />
                    );
                  }
                }
                if (block.type === "text") {
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {block.content}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
