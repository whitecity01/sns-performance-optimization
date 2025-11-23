import { useEffect, useState } from 'react';
import { axiosInterface } from '@/services/axiosForm';
import '@/styles/social/NotificationPreview.scss';

const NotificationPreview = () => {
  const [count, setCount] = useState(0);

  const fetchCount = async () => {
    try {
      const res = await axiosInterface('get', '/notification-count');
      setCount(res.unreadCount);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div className="noti-bell">
      <span className="bell-icon">🔔</span>
      {count > 0 && <span className="noti-badge">{count}</span>}
    </div>
  );
};

export default NotificationPreview;
