import type { FeedInterface } from '@/interfaces/social';
import { useState } from 'react';

interface FeedProps {
  feed: FeedInterface;
}

const FeedItem = ({ feed }: FeedProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? feed.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === feed.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <li className="feed-item">
      <div className="feed-header">
        <img src={feed.owner.profile} alt="owner" className="owner-profile" />
        <span className="owner-name">{feed.owner.name}</span>
      </div>

      <div className="feed-text">
        <h3>{feed.title}</h3>
        <p>{feed.content}</p>
      </div>

      <div className="feed-slider">
        <img
          src={feed.images[currentIndex]}
          alt="feed"
          className="slider-img"
        />

        {feed.images.length > 1 && (
          <button className="arrow left" onClick={handlePrev}>
            ‹
          </button>
        )}

        {feed.images.length > 1 && (
          <button className="arrow right" onClick={handleNext}>
            ›
          </button>
        )}

        <div className="dots">
          {feed.images.map((_, i) => (
            <span
              key={i}
              className={`dot ${currentIndex === i ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>
      </div>

      <div className="feed-comments">
        {feed.comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <img
              src={comment.user.profile}
              alt="profile"
              className="comment-profile"
            />
            <div>
              <strong>{comment.user.name}</strong> {comment.text}
            </div>
          </div>
        ))}
      </div>
    </li>
  );
};

export default FeedItem;
