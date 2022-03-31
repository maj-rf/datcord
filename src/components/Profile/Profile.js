import React from 'react';
import { ProfileWrapper } from './Profile.style';
function Profile({ handleProfileView, handleLogOut }) {
  return (
    <ProfileWrapper>
      <h1>Profile</h1>
      <button onClick={handleProfileView}>Go back</button>
      <button onClick={handleLogOut}>Log Out</button>
    </ProfileWrapper>
  );
}

export default Profile;
