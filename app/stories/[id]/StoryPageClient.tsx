'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, Eye, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface Story {
  // Add your story type here based on your data structure
  id: string;
  title: string;
  imageUrl: string;
  author: string;
  datePublished: string;
  readTime: string;
  content: {
    fullStory: string[];
  };
  likes: string;
  views: string;
}

export default function StoryPageClient({ story }: { story: Story }) {
  return (
    <div className="min-h-screen bg-black pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/stories">
          <Button variant="ghost" className="mb-8 text-red-400 hover:text-red-300">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Stories
          </Button>
        </Link>

        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
          <Image
            src={story.imageUrl}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          <div className="absolute bottom-0 p-8 w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-red-400 mb-4"
            >
              {story.title}
            </motion.h1>
            
            <div className="flex items-center gap-6 text-gray-400">
              <span>{story.author}</span>
              <span>{story.datePublished}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {story.readTime}
              </span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="prose prose-invert prose-red max-w-none"
        >
          {story.content.fullStory.map((paragraph, index) => (
            <p key={index} className="text-gray-300 mb-6">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <div className="flex items-center gap-6 mt-12 pt-8 border-t border-red-500/10">
          <span className="flex items-center gap-2 text-gray-400">
            <Heart className="w-5 h-5 text-red-400" />
            {story.likes} likes
          </span>
          <span className="flex items-center gap-2 text-gray-400">
            <Eye className="w-5 h-5 text-red-400" />
            {story.views} views
          </span>
        </div>
      </div>
    </div>
  );
}