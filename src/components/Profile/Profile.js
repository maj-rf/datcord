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
  const [error, setError] = useState('');

  async function updateName(e) {
    e.preventDefault();
    const userRef = doc(db, 'users', user.uid);
    try {
      if (input === '' || input === ' ' || input.length < 3) {
        setError('Cannot be blank and must be more than 8 characters');
        return;
      }
      await updateDoc(userRef, {
        name: input,
      });
      setIsEditing(false);
      setInput('');
      setError('');
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
        <User x={currentUser} primary>
          <p>Email: {currentUser?.email}</p>
        </User>

        <div>
          {isEditing ? (
            <form onSubmit={updateName}>
              <input placeholder="Name..." onChange={handleChange}></input>
              <button onClick={() => setIsEditing(false)} type="button">
                &#10005;
              </button>
            </form>
          ) : (
            <>
              <StyledButton
                submit
                type="button"
                onClick={() => setIsEditing(true)}
              >
                Edit Display Name
              </StyledButton>
            </>
          )}
        </div>
        <StyledButton submit onClick={handleProfileView}>
          Go back
        </StyledButton>
        <StyledButton submit onClick={handleLogOut}>
          Log Out
        </StyledButton>
        {error && <div>{error}</div>}
      </ProfileInner>
    </ProfileWrapper>
  );
}

export default Profile;
