import { useQuery } from '@tanstack/react-query';
import '@/styles/social/StoryLayout.scss';
import type { StoryInterface } from '@/interfaces/social';
import { axiosInterface } from '@/services/axiosForm';

const StoryLayout = () => {
  const fetchStories = async () => {
    const res = await axiosInterface('get', '/stories');
    return res.stories as StoryInterface[];
  };

  const { data: stories, isLoading } = useQuery({
    queryKey: ['stories'],
    queryFn: fetchStories,
    staleTime: 1000, // 1초 동안 fresh
  });

  return (
    <div className="story-layout">
      {isLoading && <p>스토리 로딩 중...</p>}

      <ul className="story-list">
        {stories?.map((story) => (
          <li
            key={story.id}
            className={`story-item ${story.read ? 'read' : 'unread'}`}
          >
            <img src={story.profile} alt={`user${story.id}`} />
            <span>user{story.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoryLayout;
