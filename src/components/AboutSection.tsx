
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-4 inline-block relative">
            About Me
            <span className="block h-1 w-24 bg-portfolio-secondary mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm currently pursuing my B.Tech in Electronics and Communication Engineering at SRM University, Tamil Nadu, India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-portfolio-primary mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-portfolio-secondary pl-4">
                  <h4 className="font-medium">SRM University</h4>
                  <p className="text-sm text-gray-500">B.Tech in Electronics and Communication Engineering</p>
                  <p className="text-sm text-gray-500">July 2022 - May 2026</p>
                  <p className="text-sm text-gray-700 mt-1">GPA: 7.62/10</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-portfolio-primary mb-4">Objective</h3>
              <p className="text-gray-700">
                I am an enthusiastic engineering student with hands-on experience in IoT projects, a basic understanding of signal and development, and a strong interest in embedded systems. I am looking for opportunities where I can apply my skills, gain real-world experience, and continue learning in both software and hardware domains.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
