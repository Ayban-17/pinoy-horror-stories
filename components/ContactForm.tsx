'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // For now, we'll just open Gmail with the form data
    const subject = `Message from ${formData.name}`;
    const body = `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=mrkvnhrnndz17@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <div>
      <Button 
        onClick={() => setIsOpen(true)}
        className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30"
      >
        <Mail className="w-4 h-4 mr-2" />
        Email Me
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-black/80 p-6 rounded-xl border border-red-500/30 w-full max-w-md">
            <h3 className="text-xl font-bold text-red-400 mb-4">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-2 rounded bg-red-950/20 border border-red-500/20 
                    focus:border-red-500/40 focus:outline-none text-gray-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-2 rounded bg-red-950/20 border border-red-500/20 
                    focus:border-red-500/40 focus:outline-none text-gray-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-2 rounded bg-red-950/20 border border-red-500/20 
                    focus:border-red-500/40 focus:outline-none text-gray-200"
                  rows={4}
                  required
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-300"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;