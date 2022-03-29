import React from 'react';
import profileImage from '../../assets/pp-svg.svg';
import { UserWrapper, ImgContainer } from './User.style';
function User({ x }) {
  return (
    <UserWrapper>
      <ImgContainer>
        <img src={profileImage} alt={x.name + ' image'} />
        <div className="status-container">
          <div className={x.isOnline ? 'online ' : 'offline '}></div>
        </div>
      </ImgContainer>
      <p>{x.name}</p>
    </UserWrapper>
  );
}

export default User;
