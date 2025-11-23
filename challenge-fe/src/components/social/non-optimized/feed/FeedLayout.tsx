import FeedList from '@/components/social/non-optimized/feed/FeedList';
import type { FeedInterface } from '@/interfaces/social';
import { axiosInterface } from '@/services/axiosForm';
import { useEffect, useState, useRef } from 'react';

const FeedLayout = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [feeds, setFeeds] = useState<FeedInterface[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
      observerRef.current?.unobserve(target.target);
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleObserver, {
      threshold: 0.3,
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await axiosInterface('get', '/feed', {}, { page, size: 10 });
      const newFeeds = res.items;
      setFeeds((prev) => [...prev, ...newFeeds]);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (feeds.length === 0) return;

    const observerTarget = document.getElementById('observer');
    if (observerTarget) observerRef.current?.observe(observerTarget);
  }, [feeds]);

  return (
    <div className="feed-layout">
      <FeedList feeds={feeds} />
      {isLoading && <p>Loading...</p>}
      <div id="observer" style={{ height: '10px' }}></div>
    </div>
  );
};

export default FeedLayout;
