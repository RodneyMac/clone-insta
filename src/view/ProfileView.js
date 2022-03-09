import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import UserDetails from '../components/UserDetails';

// const user = {
//   name: "roddmacal",
//   email: "rod@gmail.com",
//   id: "845078",
//   followers: [],
//   post: [],
//   following: [],
//   img: "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"
// }

const ProfileView = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      <Nav/>
      <UserDetails user={user}/>
    </div>
  )
}

export default ProfileView;