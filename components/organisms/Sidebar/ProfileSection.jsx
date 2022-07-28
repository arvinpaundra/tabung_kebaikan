import { useCallback, useEffect, useState } from 'react';
import { getDetailUser } from '../../../services/petugas';

const IMG_URL = process.env.NEXT_PUBLIC_IMG;

/* eslint-disable @next/next/no-img-element */
const ProfileSection = ({ user }) => {
  const [profile, setProfile] = useState({
    fullname: '',
    username: '',
    profile_picture: 'init.png',
  });
  const [isLoading, setIsLoading] = useState(null);

  const detailProfile = useCallback(async (id_user) => {
    try {
      setIsLoading(true);

      const response = await getDetailUser(id_user);

      setProfile(response.data.result);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  const { id_user } = user;

  useEffect(() => {
    detailProfile(id_user);
  }, [detailProfile, id_user]);

  return (
    <section className="flex flex-col gap-0.5 items-center">
      {isLoading ? (
        <>
          <img
            src={`${IMG_URL}/profiles/init.png`}
            alt="Profile"
            width={90}
            height={90}
            className="rounded-full mb-1"
          />
          <div className="w-3/5 h-6 animate-pulse bg-light-grey" />
          <div className="w-2/5 h-6 animate-pulse bg-light-grey" />
        </>
      ) : (
        <>
          <img
            src={`${IMG_URL}/profiles/${profile.profile_picture}`}
            alt="Profile"
            width={90}
            height={90}
            className="rounded-full mb-1"
          />
          <h3 className="mt-2 font-bold text-lg text-black/90">{profile.fullname}</h3>
          <p>{profile.username}</p>
        </>
      )}
    </section>
  );
};

export default ProfileSection;
