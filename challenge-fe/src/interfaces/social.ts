interface FeedInterface {
  id: number;
  title: string;
  content: string;

  owner: {
    name: string;
    profile: string;
  };

  images: string[];

  comments: {
    id: number;
    text: string;
    user: {
      name: string;
      profile: string;
    };
  }[];
}

interface FeedListInterface {
  feeds: FeedInterface[];
}

interface StoryInterface {
  id: number;
  profile: string;
  read: boolean;
}

interface FriendInterface {
  id: number;
  name: string;
  profile: string;
}

interface NotificationCountResponse {
  unreadCount: number;
}

interface ProfilePreviewInterface {
  name: string;
  profileImg: string;
}

export type {
  FeedInterface,
  FeedListInterface,
  StoryInterface,
  FriendInterface,
  NotificationCountResponse,
  ProfilePreviewInterface,
};
