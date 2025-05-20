
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const technicalSkills = {
    languages: ["Python", "HTML", "CSS", "JavaScript"],
    tools: ["GitHub", "MATLAB", "Xilinx", "Arduino IDE"],
    technologies: ["IoT", "Embedded Systems"],
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
          />
          <SkillCard
            title="Tools"
            skills={technicalSkills.tools}
            iconClass="i-tools"
          />
          <SkillCard
            title="Technologies"
            skills={technicalSkills.technologies}
            iconClass="i-tech"
          />
          <SkillCard
            title="Soft Skills"
            skills={technicalSkills.softSkills}
            iconClass="i-soft"
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills, iconClass }: { title: string; skills: string[]; iconClass: string }) => {
  return (
    <Card className="bg-white border border-gray-100 shadow hover:shadow-lg transition-all hover:-translate-y-1">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-portfolio-primary mb-4 flex items-center">
          {title}
        </h3>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-portfolio-secondary rounded-full mr-2"></span>
              <span className="text-gray-700">{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
