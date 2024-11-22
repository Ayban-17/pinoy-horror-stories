// app/stories/[id]/page.tsx
import StoryPageClient from './StoryPageClient';
import data from '@/data/stories-data.json';

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const resolvedParams = await params;
  const story = data.stories.find(s => s.id === resolvedParams.id);
  
  if (!story) return <div>Story not found</div>;
  return <StoryPageClient story={story} />;
}