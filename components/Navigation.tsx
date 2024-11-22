'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Skull, Ghost } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <motion.a
      href={href}
      className="relative text-red-400 hover:text-red-300 transition-all duration-300 px-4 py-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 rounded-full"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      className={`fixed w-full z-50 ${scrolled ? 'py-4' : 'py-6'} transition-all duration-300`}
    >
      {/* Floating Background */}
      <div className={`absolute inset-x-0 mx-auto max-w-7xl top-[50%] -translate-y-[50%] h-[80%] 
        backdrop-blur-sm bg-black/20 rounded-full transition-all duration-300
        ${scrolled ? 'bg-black/40' : 'bg-black/20'}`} 
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="text-xl font-bold flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Skull className="h-6 w-6 text-red-500" />
            </motion.div>
            <span className="text-red-400">
              Pinoy Horror Stories
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/stories">Stories</NavLink>
            {/* <NavLink href="/categories">Categories</NavLink> */}
            <NavLink href="/about">About</NavLink>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/stories">
                <Button 
                    className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30"
                >
                    Read Now
                    <Ghost className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-red-400 hover:text-red-300"
            >
              <AnimatePresence mode="wait">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-4 md:hidden"
            >
              <div className="backdrop-blur-md bg-black/40 rounded-2xl border border-red-500/10 overflow-hidden">
                <div className="p-4 space-y-2">
                  {['Home', 'Stories', 'Categories', 'About'].map((item) => (
                    <motion.a
                      key={item}
                      href={item === 'Home' ? '/' : item === 'Stories' ? '/stories' : item === 'Categories' ? '/categories' : '/about'}
                      whileHover={{ x: 10 }}
                      className="block px-4 py-3 text-red-400 hover:text-red-300 transition-colors rounded-lg hover:bg-red-500/10"
                    >
                      {item}
                    </motion.a>
                  ))}
                  <Button 
                    className="w-full mt-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30"
                  >
                    Read Now
                    <Ghost className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;