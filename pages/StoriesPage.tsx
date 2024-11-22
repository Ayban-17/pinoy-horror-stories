'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ghost, Skull, Castle, Moon, Bookmark, Eye, Heart, Clock, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import data from '@/data/stories-data.json';
import Link from 'next/link';

interface StoryCardProps {
  id: string;
  title: string;
  category: string;
  preview: string;
  readTime: string;
  likes: string;
  views: string;
  imageUrl: string;
}

const CategoryBadge = ({ icon: Icon, label, active, onClick }: { icon: LucideIcon, label: string, active: boolean, onClick: () => void }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
        ${active ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'hover:bg-red-500/10 text-gray-400 hover:text-red-400 border-transparent'}
        backdrop-blur-sm border hover:border-red-500/20`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </motion.button>
  );
};

const StoryCard = ({ id, title, category, preview, readTime, likes, views, imageUrl }: StoryCardProps) => {
  return (
   <Link href={`/stories/${id}`}>
     <motion.div
      className="group relative"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-xl backdrop-blur-sm border border-red-500/10 hover:border-red-500/30 transition-colors">
        {/* Story Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            priority
            onError={(e) => {
              e.currentTarget.src = '/api/placeholder/400/300';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 backdrop-blur-sm border border-red-500/20">
              {category}
            </span>
          </div>
          
          {/* Bookmark Button */}
          <motion.button
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Bookmark className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-5 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-red-400 group-hover:text-red-300 transition-colors mb-3">
            {title}
          </h3>
          
          <p className="text-sm text-gray-400 line-clamp-2 mb-4 group-hover:text-gray-300 transition-colors">
            {preview}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5" />
                {likes}
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                {views}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
   </Link>
  );
};

const StoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap: { [key: string]: LucideIcon } = {
    Ghost,
    Skull,
    Castle,
    Moon
  };

  const filteredStories = data.stories.filter(story => {
    const matchesCategory = activeCategory === 'All' || story.category === activeCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.preview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black pt-28">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-red-400">{data.header.title}</h1>
          <p className="text-gray-400">{data.header.description}</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stories..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-red-950/20 border border-red-500/20 
                focus:border-red-500/40 focus:outline-none focus:ring-0 
                text-red-400 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3">
          {data.categories.map((category) => (
            <CategoryBadge
              key={category.label}
              icon={iconMap[category.icon]}
              label={category.label}
              active={activeCategory === category.label}
              onClick={() => setActiveCategory(category.label)}
            />
          ))}
        </div>

        {/* Stories Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <StoryCard {...story} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        <div className="flex justify-center pt-8 pb-12">
          <Button 
            className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30"
          >
            Load More Stories
            <Ghost className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;