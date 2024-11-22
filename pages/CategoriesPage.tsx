'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Ghost, Skull, Castle, Moon, Sword, Brain } from 'lucide-react';
import Image from 'next/image';

const CategoryCard = ({ title, icon: Icon, description, count, imageUrl }: { title: string, icon: React.ElementType, description: string, count: string, imageUrl: string }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl"
    >
      {/* Background Image */}
      <div className="relative h-[400px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Icon */}
        <div className="mb-4">
          <motion.div
            whileHover={{ rotate: 12 }}
            className="w-12 h-12 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 
              flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform"
          >
            <Icon className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-red-400 group-hover:text-red-300 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors">
            {description}
          </p>
          <div className="text-sm text-red-400/80">
            {count} Stories
          </div>
        </div>

        {/* Hover line animation */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/50 to-transparent"
        />
      </div>
    </motion.div>
  );
};

const CategoriesPage = () => {
  const categories = [
    {
      title: "Paranormal",
      icon: Ghost,
      description: "Explore stories of supernatural encounters, haunted places, and unexplained phenomena that defy reality.",
      count: "156",
      imageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c"
    },
    {
      title: "Psychological Horror",
      icon: Brain,
      description: "Delve into the depths of human psyche with tales that blur the lines between reality and madness.",
      count: "142",
      imageUrl: "https://images.unsplash.com/photo-1603714228681-b399854b8f80"
    },
    {
      title: "Gothic Horror",
      icon: Castle,
      description: "Experience classic tales of darkness set in ancient castles, cursed mansions, and forgotten places.",
      count: "98",
      imageUrl: "https://images.unsplash.com/photo-1559630134-3a0182111e92"
    },
    {
      title: "Cosmic Horror",
      icon: Moon,
      description: "Encounter the unknown with stories of cosmic entities, ancient gods, and horrors beyond comprehension.",
      count: "87",
      imageUrl: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08"
    },
    {
      title: "Slasher",
      icon: Sword,
      description: "Follow intense tales of survival against relentless killers and deadly encounters.",
      count: "112",
      imageUrl: "https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229"
    },
    {
      title: "Demonic",
      icon: Skull,
      description: "Witness battles against dark forces, possessions, and supernatural entities from the underworld.",
      count: "134",
      imageUrl: "https://images.unsplash.com/photo-1604005950576-8947adb7983c"
    },
    {
      title: "Folk Horror",
      icon: Ghost,
      description: "Discover terrifying traditions, ancient rituals, and rural legends that hide sinister secrets.",
      count: "76",
      imageUrl: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a"
    },
    {
      title: "Undead",
      icon: Skull,
      description: "Explore stories of zombies, vampires, and creatures that lurk between life and death.",
      count: "92",
      imageUrl: "https://images.unsplash.com/photo-1517821099606-cef63a9bcda6"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl font-bold text-red-400">Horror Categories</h1>
          <p className="text-gray-400">
            Explore our diverse collection of horror stories, from supernatural encounters to psychological thrillers.
            Choose your nightmare and begin your descent into darkness.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CategoriesPage;