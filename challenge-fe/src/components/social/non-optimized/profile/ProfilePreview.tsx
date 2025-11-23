import { useEffect, useState } from 'react';
import { axiosInterface } from '@/services/axiosForm';
import type { ProfilePreviewInterface } from '@/interfaces/social';
import '@/styles/social/ProfilePreview.scss';

const ProfilePreview = () => {
  const [profile, setProfile] = useState<ProfilePreviewInterface | null>(null);

  const fetchProfile = async () => {
    try {
      const res = await axiosInterface('get', '/profile');
      setProfile(res.profile);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="my-profile">
      {profile ? (
        <>
          <img src={profile.profileImg} alt="me" />
          <span>{profile.name}</span>
        </>
      ) : (
        <span>로딩중...</span>
      )}
    </div>
  );
};

export default ProfilePreview;
