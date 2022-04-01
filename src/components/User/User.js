import React from 'react';
import profileImage from '../../assets/pp-svg.svg';
import { UserWrapper, ImgContainer } from './User.style';
function User({ x, primary, chat, children }) {
  return (
    <UserWrapper primary={primary} chat={chat}>
      <ImgContainer>
        <img src={profileImage} alt={x?.name + ' image'} />
        {!chat && (
          <div className="status-container">
            <div className={x?.isOnline ? 'online ' : 'offline '}></div>
          </div>
        )}
      </ImgContainer>
      <div>
        <p>{x?.name}</p>
        {children}
      </div>
    </UserWrapper>
  );
}

export default User;
