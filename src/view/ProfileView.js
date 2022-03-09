import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import UserDetails from '../components/UserDetails';
import Following from '../components/Following';

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
  const common = useSelector((state) => state.common);
  console.log(user);
  console.log(common);

  // const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    // setShowModal(!showModal);
  }

  return (
    <div>
      <Nav/>
      <UserDetails user={user} handleModal={handleModal}/>
      {common.showModal && <Following/>}
    </div>
  )
}

export default ProfileView;