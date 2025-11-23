import { useQuery } from '@tanstack/react-query';
import '@/styles/social/ProfilePreview.scss';
import { axiosInterface } from '@/services/axiosForm';
import type { ProfilePreviewInterface } from '@/interfaces/social';

const ProfilePreview = () => {
  const fetchProfile = async () => {
    const res = await axiosInterface('get', '/profile');
    return res.profile as ProfilePreviewInterface;
  };

  const { data: profile, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
    staleTime: 1000 * 60, // 1분
  });

  return (
    <div className="my-profile">
      {isLoading || !profile ? (
        <span>로딩중...</span>
      ) : (
        <>
          <img src={profile.profileImg} alt="me" />
          <span>{profile.name}</span>
        </>
      )}
    </div>
  );
};

export default ProfilePreview;
