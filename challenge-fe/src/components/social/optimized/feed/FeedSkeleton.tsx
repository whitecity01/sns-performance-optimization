const FeedSkeleton = () => {
  return (
    <li className="feed-item skeleton">
      <div className="feed-header">
        <div className="skeleton-circle profile" />
        <div className="skeleton-block name" />
      </div>

      <div className="feed-text">
        <div className="skeleton-block title" />
        <div className="skeleton-block content" />
      </div>

      <div className="feed-slider">
        <div className="skeleton-block image" />
      </div>

      <div className="feed-comments">
        {[1, 2, 3].map((i) => (
          <div key={i} className="comment-item">
            <div className="skeleton-circle comment-profile" />
            <div className="skeleton-block comment-text" />
          </div>
        ))}
      </div>
    </li>
  );
};

export default FeedSkeleton;
