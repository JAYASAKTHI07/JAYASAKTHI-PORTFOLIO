
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
  const handleDownload = () => {
    // Create a link element and trigger download of the resume image
    const link = document.createElement('a');
    link.href = '/lovable-uploads/7eedc917-dd5f-4bf1-95f7-e2100e5c5065.png';
    link.download = 'Jaya_Sakthi_S_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-4 inline-block relative">
            Resume
            <span className="block h-1 w-24 bg-portfolio-secondary mx-auto mt-2"></span>
          </h2>
          <div className="mt-8">
            <Button 
              onClick={handleDownload}
              className="bg-portfolio-secondary hover:bg-portfolio-primary text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 mx-auto"
            >
              <Download size={20} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
