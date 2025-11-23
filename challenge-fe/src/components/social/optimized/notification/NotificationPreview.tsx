import { useQuery } from '@tanstack/react-query';
import '@/styles/social/NotificationPreview.scss';
import { axiosInterface } from '@/services/axiosForm';

const NotificationPreview = () => {
  const fetchNotificationCount = async () => {
    const res = await axiosInterface('get', '/notification-count');
    return res.unreadCount as number;
  };

  const { data: count = 0 } = useQuery({
    queryKey: ['notification-count'],
    queryFn: fetchNotificationCount,
    staleTime: 1000, // 1초 동안 fresh
  });

  return (
    <div className="noti-bell">
      <span className="bell-icon">🔔</span>
      {count > 0 && <span className="noti-badge">{count}</span>}
    </div>
  );
};

export default NotificationPreview;
