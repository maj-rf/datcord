import React, { useState } from 'react';
import { ProfileWrapper, ProfileInner } from './Profile.style';
import User from '../User/User';
import { StyledButton } from '../../styles/sharedStyles';
import { useUserAuth } from '../../context/UserAuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
function Profile({ handleProfileView, handleLogOut, currentUser }) {
  const { user } = useUserAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState('');

  async function updateName(e) {
    e.preventDefault();
    const userRef = doc(db, 'users', user.uid);
    try {
      await updateDoc(userRef, {
        name: input,
      });
      setIsEditing(false);
      setInput('');
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <ProfileWrapper>
      <ProfileInner>
        <h1>Profile</h1>
        <User x={currentUser} primary />
        <div>
          {isEditing ? (
            <form onSubmit={updateName}>
              <input placeholder="Name..." onChange={handleChange}></input>
            </form>
          ) : (
            <>
              <p>Username: {currentUser?.name}</p>
              <button type="button" onClick={() => setIsEditing(true)}>
                Edit
              </button>
            </>
          )}
          <p>Email: {currentUser?.email}</p>
        </div>
        <StyledButton submit onClick={handleProfileView}>
          Go back
        </StyledButton>
        <StyledButton submit onClick={handleLogOut}>
          Log Out
        </StyledButton>
      </ProfileInner>
    </ProfileWrapper>
  );
}

export default Profile;
