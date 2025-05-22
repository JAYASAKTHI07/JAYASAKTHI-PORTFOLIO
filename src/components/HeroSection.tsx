
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 bg-gradient-to-br from-portfolio-light to-white"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-primary mb-4">
              Jaya Sakthi S
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
              B.Tech in Electronics and Communication Engineering
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              An enthusiastic engineering student with hands-on experience in IoT projects, a strong interest in 
              embedded systems, and web development skills. Looking for opportunities to apply my skills and gain 
              real-world experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-portfolio-secondary hover:bg-portfolio-primary text-white"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                variant="outline" 
                className="border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-light"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-square rounded-full bg-portfolio-light flex items-center justify-center overflow-hidden border-4 border-portfolio-accent mx-auto mb-6" style={{ maxWidth: '250px' }}>
                <Avatar className="w-full h-full">
                  <AvatarImage src="/profile.jpg" alt="Jaya Sakthi S" />
                  <AvatarFallback className="text-5xl font-bold text-portfolio-primary">JS</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Connect with me</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://github.com" className="text-gray-700 hover:text-portfolio-secondary" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                  <a href="https://linkedin.com" className="text-gray-700 hover:text-portfolio-secondary" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="mailto:jayasakthi1024@gmail.com" className="text-gray-700 hover:text-portfolio-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#about" className="text-portfolio-primary hover:text-portfolio-secondary">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
