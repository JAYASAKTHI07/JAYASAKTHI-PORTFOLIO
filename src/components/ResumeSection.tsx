
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const ResumeSection = () => {
  const projects = [
    {
      title: "SKEFLIX - Movie Recommendation System",
      type: "Web Development Project",
      details: [
        "Developed a movie recommendation system using HTML, CSS, and JavaScript for the frontend and Java with Spring Boot for the backend, implementing 8+ core features.",
        "Integrated MySQL to manage 50,000+ movie records, optimizing query performance for faster recommendations.",
        "Implemented search, genre-based filtering, and user ratings, improving user engagement by 40%.",
        "Designed a responsive UI, ensuring smooth performance across 10+ device types, enhancing accessibility and user experience."
      ]
    },
    {
      title: "Satellite Image Enhancement using Restormer",
      type: "Deep Learning and Image Processing Project",
      details: [
        "Implemented a transformer-based model (Restormer) to denoise and enhance satellite imagery.",
        "Fine-tuned pre-trained Restormer architecture on a satellite image classification dataset from Kaggle.",
        "Applied Gaussian noise to simulate real-world degradation and trained using MSE-based loss.",
        "Evaluated image quality using PSNR, MSE, SSIM, and FSIM metrics to validate performance.",
        "Achieved high visual clarity and structural preservation in enhanced satellite images."
      ]
    },
    {
      title: "SONAR Radar Using Ultrasonic Sensor",
      type: "Embedded and Sensing Project",
      details: [
        "Designed a SONAR-based object detection system using Arduino UNO, ultrasonic sensor, and servo motor.",
        "Visualized real-time scanning data in radar format using Processing IDE.",
        "Enabled 180° obstacle detection for surveillance and monitoring applications."
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-4 inline-block relative">
            Resume
            <span className="block h-1 w-24 bg-portfolio-secondary mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Download my complete resume or view the details below.
          </p>
          <Button 
            className="bg-portfolio-primary hover:bg-portfolio-secondary text-white"
            asChild
          >
            <a href="#" download>
              <Download className="w-4 h-4 mr-2" />
              Download My Resume
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Objective */}
          <Card className="bg-white border border-gray-100 shadow hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-portfolio-primary mb-4">Objective</h3>
              <p className="text-gray-700">
                I am an enthusiastic engineering student with hands-on experience in IoT projects, a basic understanding of 
                front-end development, and a strong interest in embedded systems. I am looking for opportunities where I can 
                apply my skills, gain real-world experience, and continue learning in both software and hardware domains.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-white border border-gray-100 shadow hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-portfolio-primary mb-4">Education</h3>
              <div className="border-l-2 border-portfolio-secondary pl-4">
                <h4 className="font-medium text-portfolio-dark">SRM University</h4>
                <p className="text-sm text-gray-600">B.Tech in Electronics and Communication Engineering</p>
                <p className="text-sm text-gray-600">July 2022 - May 2026</p>
                <p className="text-sm text-portfolio-secondary font-medium mt-1">GPA: 7.92/10</p>
                <p className="text-sm text-gray-600">Tamil Nadu, India</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Skills */}
        <Card className="bg-portfolio-light border border-gray-100 shadow hover:shadow-lg transition-all mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-portfolio-primary mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-medium text-portfolio-dark mb-2">Languages</h4>
                <p className="text-gray-700">Python, HTML, CSS, JavaScript</p>
              </div>
              <div>
                <h4 className="font-medium text-portfolio-dark mb-2">Tools</h4>
                <p className="text-gray-700">GitHub, MATLAB, Arduino IDE</p>
              </div>
              <div>
                <h4 className="font-medium text-portfolio-dark mb-2">Technologies</h4>
                <p className="text-gray-700">IoT, Embedded Systems</p>
              </div>
              <div>
                <h4 className="font-medium text-portfolio-dark mb-2">Soft Skills</h4>
                <p className="text-gray-700">Problem solving, Debugging, Logical Thinking, Communication</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-portfolio-primary mb-6">Projects</h3>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white border border-gray-100 shadow hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-portfolio-primary">{project.title}</h4>
                      <p className="text-sm text-portfolio-secondary font-medium">{project.type}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-portfolio-secondary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications and Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white border border-gray-100 shadow hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-portfolio-primary mb-4">Certifications</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-portfolio-secondary pl-4">
                  <h4 className="font-medium text-portfolio-dark">SoC Design for Low Power</h4>
                  <p className="text-sm text-gray-600">Qualcomm (NIT Trichy)</p>
                </div>
                <div className="border-l-2 border-portfolio-secondary pl-4">
                  <h4 className="font-medium text-portfolio-dark">IoT & MATLAB Workshop</h4>
                  <p className="text-sm text-gray-600">IIT</p>
                </div>
                <div className="border-l-2 border-portfolio-secondary pl-4">
                  <h4 className="font-medium text-portfolio-dark">BSNL Internship</h4>
                  <p className="text-sm text-gray-600">Telecommunications</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-100 shadow hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-portfolio-primary mb-4">Achievements</h3>
              <div className="border-l-2 border-portfolio-secondary pl-4">
                <h4 className="font-medium text-portfolio-dark">1st Place - Paper Fiesta</h4>
                <p className="text-sm text-gray-600">Kongu Engineering College (National-level Symposium)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
