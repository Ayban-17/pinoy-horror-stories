'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Ghost, Users, BookOpen, Star, Github, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

const StatCard = ({ icon: Icon, value, label }: { icon: React.ElementType, value: string, label: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex flex-col items-center space-y-2 p-6 rounded-xl bg-red-500/5 backdrop-blur-sm border border-red-500/10"
  >
    <Icon className="w-6 h-6 text-red-400" />
    <span className="text-2xl font-bold text-red-400">{value}</span>
    <span className="text-sm text-gray-400">{label}</span>
  </motion.div>
);

const CreatorSection = () => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="max-w-4xl mx-auto bg-red-500/5 backdrop-blur-sm border border-red-500/10 rounded-2xl overflow-hidden"
  >
    <div className="grid md:grid-cols-2 gap-8 p-8">
      {/* Creator Image */}
      <div className="relative h-[300px] md:h-full rounded-xl overflow-hidden">
        <Image
          src="/me.jpg"  // Replace with your image
          alt="Creator"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Creator Info */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-red-400 mb-2">Ayban Hernandez</h3>
          <p className="text-gray-400 font-medium">Web Developer</p>
        </div>

        <div className="space-y-4 text-gray-400">
          <p>
            Isang web developer na mahilig sa mga horror stories at gusto ibahagi
            ang mga kwentong nagpapatingkayad sa mga Pinoy.
          </p>
          <p>
            Ginawa ko ang Pinoy Horror Stories para magkaroon tayo ng sariling
            platform kung saan pwede nating i-share ang ating mga kakaibang
            karanasan at nakakatakot na kwento.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <ContactForm />
          <Button 
            variant="ghost"
            className="text-gray-400 hover:text-red-400"
          >
            <Github className="w-4 h-4 mr-2" />
            <a href="https://github.com/Ayban-17" target="_blank" rel="noopener noreferrer">Github</a>
            
          </Button>
          <Button 
            variant="ghost"
            className="text-gray-400 hover:text-red-400"
          >
            <Coffee className="w-4 h-4 mr-2" />
            <a href="https://buymeacoffee.com/ayban123" target="_blank" rel="noopener noreferrer">Buy Me a Coffee</a>
          </Button>
        </div>
      </div>
    </div>
  </motion.div>
);

const AboutPage = () => {
  const stats = [
    { icon: Ghost, value: '100+', label: 'Takot Stories' },
    { icon: Users, value: '10K+', label: 'Readers' },
    { icon: BookOpen, value: '8', label: 'Kategorya' },
    { icon: Star, value: '4.9', label: 'Rating' },
  ];

  return (
    <div className="min-h-screen bg-black pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-20">
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1638978214582-f2bd3357b970?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbGxvd2VlbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Creepy aisle with Filipino elements"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-16 space-y-6 max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-red-400"
              >
                Pinoy Horror Stories
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-300 text-lg"
              >
                Naglalayong magbigay ng platform para sa mga kuwentong hindi
                maipaliwanag, mga karanasang nakatatakot, at mga misteryong
                bahagi ng ating kulturang Pilipino.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="mb-20 space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-red-400 text-center"
          >
            Bakit Pinoy Horror Stories?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-gray-400 space-y-4 text-center"
          >
            <p>
              Ang Pinoy Horror Stories ay isang platform na nagsimula noong 2023
              para sa mga Pilipinong mahilig sa horror stories at gustong
              magbahagi ng kanilang mga karanasan.
            </p>
            <p>
              Dito, pinagsasama-sama natin ang mga kuwentong multo, engkanto,
              maligno, at iba pang misteryosong pangyayari na bahagi ng ating
              kulturang Pilipino.
            </p>
          </motion.div>
        </div>

        {/* Creator Section */}
        <div className="mb-20 space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-red-400 text-center mb-12"
          >
            Meet the Creator
          </motion.h2>
          <CreatorSection />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;