
import { Card, CardContent } from "@/components/ui/card";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "SoC Design for Low Power",
      issuer: "Qualcomm (NIT Trichy)"
    },
    {
      title: "IoT & MATLAB Workshop",
      issuer: "IIT"
    },
    {
      title: "BSNL Internship",
      issuer: "Telecommunications"
    }
  ];

  const achievements = [
    {
      title: "1st Place - Paper Fiesta",
      issuer: "Kings Engineering College (National-level Symposium)"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-portfolio-light">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-4 inline-block relative">
            Certifications & Achievements
            <span className="block h-1 w-24 bg-portfolio-secondary mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications and achievements that have enhanced my skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-portfolio-primary mb-4">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div className="bg-portfolio-secondary rounded-full p-2 mr-4 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-portfolio-primary">{cert.title}</h4>
                        <p className="text-sm text-gray-600">{cert.issuer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-portfolio-primary mb-4">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white shadow hover:shadow-md transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div className="bg-portfolio-secondary rounded-full p-2 mr-4 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15c2.67 0 8 1.33 8 4v1H4v-1c0-2.67 5.33-4 8-4m0-2a4 4 0 0 0 4-4V6c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3c0 2.21 1.79 4 4 4"></path></svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-portfolio-primary">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.issuer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
