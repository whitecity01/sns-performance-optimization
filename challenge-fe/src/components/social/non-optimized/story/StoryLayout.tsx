import { useEffect, useState } from 'react';
import type { StoryInterface } from '@/interfaces/social';
import '@/styles/social/StoryLayout.scss';
import { axiosInterface } from '@/services/axiosForm';

const StoryLayout = () => {
  const [stories, setStories] = useState<StoryInterface[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchStories = async () => {
    try {
      setLoading(true);
      const res = await axiosInterface('get', '/stories');
      setStories(res.stories);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div className="story-layout">
      {loading && <p>스토리 로딩 중...</p>}

      <ul className="story-list">
        {stories.map((story) => (
          <li
            key={`story-${story.id}`}
            className={`story-item ${story.read ? 'read' : 'unread'}`}
          >
            <img src={story.profile} alt={`user${story.id} profile`} />
            <span>user{story.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoryLayout;
