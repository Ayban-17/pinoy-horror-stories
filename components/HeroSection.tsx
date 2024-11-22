'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Ghost, Moon, Skull, Eye, Book } from 'lucide-react';
import Link from 'next/link';
const FloatingIcon = ({ children, className }: { children: React.ReactNode; className: string }) => {
    return (
      <div className={`absolute text-red-500/30 animate-pulse ${className}`}>
        {children}
      </div>
    );
  };

const TypewriterText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
        }, 100);

        return () => clearTimeout(timeout);
    }
    }, [currentIndex, text]);

    return <span>{displayText}</span>;
};


const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      setIsVisible(true);
      
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 20,
          y: (e.clientY / window.innerHeight) * 20,
        });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating Elements with updated positions */}
        <FloatingIcon className="top-24 left-[15%]"><Ghost className="h-12 w-12 animate-[pulse_4s_ease-in-out_infinite]" /></FloatingIcon>
        <FloatingIcon className="bottom-32 right-[20%]"><Moon className="h-12 w-12 animate-[pulse_5s_ease-in-out_infinite]" /></FloatingIcon>
        <FloatingIcon className="top-40 right-[15%]"><Eye className="h-12 w-12 animate-[pulse_3s_ease-in-out_infinite]" /></FloatingIcon>
        <FloatingIcon className="bottom-24 left-[20%]"><Skull className="h-12 w-12 animate-[pulse_3.5s_ease-in-out_infinite]" /></FloatingIcon>
  
        {/* Darker forest background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1494825514961-674db1ac2700"
            alt="Dark mysterious forest"
            fill
            className="object-cover transform scale-105"
            style={{ 
              opacity: 0.5,
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
              transition: 'transform 0.3s ease-out'
            }}
            priority
          />
          {/* Enhanced overlay with more darkness */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />
          <div className="absolute inset-0 bg-red-950/10" />
        </div>
  
        {/* Atmospheric effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-transparent animate-pulse" />
        </div>
        
        {/* Main content */}
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-4 text-red-500/80">
            <Skull className="h-16 w-16 mx-auto mb-4 animate-[pulse_2s_ease-in-out_infinite]" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-red-500 mb-6 drop-shadow-lg tracking-wider">
            <TypewriterText text="ENTER IF YOU DARE" />
          </h1>
  
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8 animate-pulse" />
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready for the creepiest stories that will keep you up all night? 
            Trust us, you&apos;ll never look at darkness the same way again.
          </p>
  
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center items-center">
            <Button 
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 w-48 group"
            >
              <Link href="/stories/1">Start Reading</Link>
              <Ghost className="ml-2 h-4 w-4 group-hover:animate-pulse" />
            </Button>
            <Button 
              variant="outline" 
              className="border-red-700 text-red-500 hover:bg-red-700 hover:text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 w-48 group"
            >
              <Link href="/stories">Browse Stories</Link>
              <Book className="ml-2 h-4 w-4 group-hover:animate-pulse" />
            </Button>
          </div>
  
          {/* Updated Stats Section without overlapping icons */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl font-bold text-red-500 mb-2 group-hover:animate-pulse">100+</div>
              <div className="text-gray-400">Horror Tales</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-red-500 mb-2 group-hover:animate-pulse">13k+</div>
              <div className="text-gray-400">Sleepless Nights</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-red-500 mb-2 group-hover:animate-pulse">4.9★</div>
              <div className="text-gray-400">Terror Rating</div>
            </div>
          </div>
  
          {/* Scroll indicator with skull instead of eye */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="text-red-500">
              <Skull className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;