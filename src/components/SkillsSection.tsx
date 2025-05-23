
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const technicalSkills = {
    languages: [
      { name: "Python", logo: "/lovable-uploads/7807ea84-35f0-4bf4-a069-97d7af07e6a4.png" },
      { name: "HTML", logo: "/lovable-uploads/0f406e8e-ad41-405c-87c7-439aa7c3f2cf.png" },
      { name: "CSS", logo: "/lovable-uploads/ef1e01cf-af14-49a2-9bbf-0de33fd7c38a.png" },
      { name: "JavaScript", logo: "/lovable-uploads/2efb30f1-daf7-4b5a-822c-5abced9d5e5e.png" }
    ],
    tools: [
      { name: "GitHub", logo: "/lovable-uploads/fa9d3bfe-d8a5-4b7c-b7f9-540ae5611f7a.png" },
      { name: "MATLAB", logo: "/lovable-uploads/862c698b-5096-4141-8aad-c0f6f9a72cfc.png" },
      { name: "Arduino IDE", logo: "/lovable-uploads/03e636be-0c2a-4465-affa-09c15fbe9a02.png" }
    ],
    technologies: ["IoT", "Embedded Systems", "Front-end Development"],
    softSkills: ["Problem-solving", "Debugging", "Logical Thinking", "Communication"]
  };

  return (
    <section id="skills" className="py-20 px-4 bg-portfolio-light">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-4 inline-block relative">
            Technical Skills
            <span className="block h-1 w-24 bg-portfolio-secondary mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the technologies and skills I've been working with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            title="Languages"
            skills={technicalSkills.languages}
            iconClass="i-code"
            hasLogos={true}
          />
          <SkillCard
            title="Tools"
            skills={technicalSkills.tools}
            iconClass="i-tools"
            hasLogos={true}
          />
          <SkillCard
            title="Technologies"
            skills={technicalSkills.technologies}
            iconClass="i-tech"
            hasLogos={false}
          />
          <SkillCard
            title="Soft Skills"
            skills={technicalSkills.softSkills}
            iconClass="i-soft"
            hasLogos={false}
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ 
  title, 
  skills, 
  iconClass, 
  hasLogos 
}: { 
  title: string; 
  skills: any[]; 
  iconClass: string;
  hasLogos: boolean;
}) => {
  return (
    <Card className="bg-white border border-gray-100 shadow hover:shadow-lg transition-all hover:-translate-y-1">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-portfolio-primary mb-4 flex items-center">
          {title}
        </h3>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              {hasLogos ? (
                <>
                  <img 
                    src={skill.logo} 
                    alt={skill.name} 
                    className="w-5 h-5 mr-3 object-contain"
                  />
                  <span className="text-gray-700">{skill.name}</span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 bg-portfolio-secondary rounded-full mr-2"></span>
                  <span className="text-gray-700">{skill}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
