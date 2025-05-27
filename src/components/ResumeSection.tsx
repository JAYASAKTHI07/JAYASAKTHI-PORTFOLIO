
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumeSection = () => {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
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
