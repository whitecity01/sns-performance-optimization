import type { FriendInterface } from '@/interfaces/social';
import '@/styles/social/FriendLayout.scss';
import { axiosInterface } from '@/services/axiosForm';
import { useQuery } from '@tanstack/react-query';

const FriendLayout = () => {
  const fetchFriends = async () => {
    const res = await axiosInterface('get', '/friends');
    return res.friends as FriendInterface[];
  };

  const { data: friends, isLoading } = useQuery({
    queryKey: ['friends'],
    queryFn: fetchFriends,
    staleTime: 1000, // 1초 동안 fresh
  });

  return (
    <div className="friend-layout">
      <h3 className="friend-header">추천 친구</h3>

      {isLoading && <p>친구 목록 로딩중...</p>}

      <ul className="friend-list">
        {friends?.map((friend) => (
          <li key={`friend-${friend.id}`} className="friend-item">
            <img src={friend.profile} alt="friend profile" />
            <div className="friend-info">
              <span className="name">{friend.name}</span>
              <span className="sub">회원님을 팔로우합니다</span>
            </div>
            <button>팔로우</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendLayout;
