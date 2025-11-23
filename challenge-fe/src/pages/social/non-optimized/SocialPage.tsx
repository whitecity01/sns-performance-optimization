import FeedLayout from '@/components/social/non-optimized/feed/FeedLayout';
import FriendLayout from '@/components/social/non-optimized/friend/FriendLayout';
import NotificationPreview from '@/components/social/non-optimized/notification/NotificationPreview';
import ProfilePreview from '@/components/social/non-optimized/profile/ProfilePreview';
import StoryLayout from '@/components/social/non-optimized/story/StoryLayout';
import '@/styles/social/SocialPage.scss';

const SocialPage = () => {
  return (
    <div className="main-layout">
      <div className="main-header">
        <NotificationPreview />
        <ProfilePreview />
      </div>

      <StoryLayout />

      <div className="content-area">
        <FeedLayout />
        <FriendLayout />
      </div>
    </div>
  );
};

export { SocialPage };
