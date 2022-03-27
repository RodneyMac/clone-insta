import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import UserDetails from '../components/UserDetails';
import Following from '../components/Following';
import Followers from '../components/Followers';
import Posts from '../components/Posts';

const ProfileView = () => {
  const user = useSelector((state) => state.user);
  const common = useSelector((state) => state.common);

  return (
    <div>
      <Nav/>
      <UserDetails user={user}/>
      {common.showModal && <Following/>}
      {common.showFollowersModal && <Followers/>}
      <Posts/>
    </div>
  )
}

export default ProfileView;