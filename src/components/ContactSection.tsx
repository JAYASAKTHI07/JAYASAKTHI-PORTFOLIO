
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-4 inline-block relative">
            Get In Touch
            <span className="block h-1 w-24 bg-portfolio-secondary mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white border border-gray-100 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-portfolio-primary mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-portfolio-secondary hover:bg-portfolio-primary text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <Card className="bg-portfolio-primary text-white border border-gray-100 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:jayasakthi1024@gmail.com" 
                      className="text-portfolio-light hover:underline"
                    >
                      jayasakthi1024@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-portfolio-light">Tamil Nadu, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="w-5 h-5 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-light hover:underline"
                    >
                      github.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="w-5 h-5 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-light hover:underline"
                    >
                      linkedin.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-medium mb-4">Let's Connect</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:jayasakthi1024@gmail.com"
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
