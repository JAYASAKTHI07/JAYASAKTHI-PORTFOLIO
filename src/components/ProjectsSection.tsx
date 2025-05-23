
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SKIFLIX - Movie Recommendation System",
      category: "Web Development Project",
      description: [
        "Developed a movie recommendation system using HTML, CSS, and JavaScript for the frontend and Java with Spring for the backend.",
        "Integrated MySQL to manage 50,000+ movie records, optimizing query performance for faster recommendations.",
        "Implemented search, time-based filtering, and sort criteria customization by user.",
        "Designed a responsive UI ensuring smooth performance across 10+ device types, enhancing accessibility and user experience."
      ],
      tags: ["HTML", "CSS", "JavaScript", "Java", "Spring", "MySQL"],
      link: "#"
    },
    {
      title: "Satellite Image Enhancement using Restormer",
      category: "Deep Learning and Image Processing Project",
      description: [
        "Implemented a deep learning model using PyTorch and TensorFlow to denoise and enhance satellite imagery.",
        "Fine-tuned pre-trained Restormer architecture on a satellite image classification dataset from Kaggle.",
        "Applied Gaussian noise to satellite images for real-world simulation and trained using MSE-based loss.",
        "Enhanced image quality using PSNR, MSE, SSIM, and FSIM metrics to validate performance.",
        "Achieved high visual clarity and structural preservation in enhanced satellite images."
      ],
      tags: ["PyTorch", "TensorFlow", "Deep Learning", "Image Processing", "Kaggle"],
      link: "#"
    },
    {
      title: "SONAR Radar Using Ultrasonic Sensor",
      category: "Embedded and Sensing Project",
      description: [
        "Designed a SONAR-based object detection system using Arduino UNO, ultrasonic sensor, and servo motor.",
        "Visualized real-time distance data in radar format using Processing IDE.",
        "Enabled 180° scanning and obstacle tracking for surveillance applications.",
        "Applied in areas like defense, maritime safety, and environment monitoring."
      ],
      tags: ["Arduino", "Ultrasonic Sensor", "Processing IDE", "SONAR", "Servo Motor"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-4 inline-block relative">
            Projects
            <span className="block h-1 w-24 bg-portfolio-secondary mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my academic journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all">
              <CardHeader className="pb-2">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-portfolio-light text-portfolio-primary">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-portfolio-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-4">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-gray-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="text-portfolio-secondary hover:text-portfolio-primary hover:bg-portfolio-light w-full"
                >
                  View Project Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
