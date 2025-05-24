
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Jaya Sakthi S</h3>
            <p className="text-gray-300 mt-2">B.Tech in Electronics and Communication Engineering</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/JAYASAKTHI07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jaya-sakthi-s-a02170259/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:jayasakthis102004@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Jaya Sakthi S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
