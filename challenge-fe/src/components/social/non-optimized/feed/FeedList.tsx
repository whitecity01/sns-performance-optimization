import '@/styles/social/FeedList.scss';
import FeedItem from '@/components/social/non-optimized/feed/FeedItem';
import type { FeedListInterface } from '@/interfaces/social';

const FeedList = ({ feeds }: FeedListInterface) => {
  return (
    <ul className="feed-list">
      {feeds.map((feed) => (
        <FeedItem key={feed.id} feed={feed} />
      ))}
    </ul>
  );
};

export default FeedList;
