import { useEffect, useState } from 'react';
import type { FriendInterface } from '@/interfaces/social';
import '@/styles/social/FriendLayout.scss';
import { axiosInterface } from '@/services/axiosForm';

const FriendLayout = () => {
  const [friends, setFriends] = useState<FriendInterface[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFriends = async () => {
    try {
      setLoading(true);
      const res = await axiosInterface('get', '/friends');
      setFriends(res.friends);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <div className="friend-layout">
      <h3 className="friend-header">추천 친구</h3>

      {loading && <p>친구 목록 로딩중...</p>}

      <ul className="friend-list">
        {friends.map((friend) => (
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
