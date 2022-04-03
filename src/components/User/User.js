import React from 'react';
import profileImage from '../../assets/pp-svg.svg';
import { UserWrapper, ImgContainer, UserInfo } from './User.style';
function User({ x, primary, chat, offline, children }) {
  return (
    <UserWrapper primary={primary} chat={chat} offline={offline}>
      <ImgContainer>
        <img src={profileImage} alt={x?.name + ' image'} />
        {!chat && (
          <div className="status-container">
            <div className={x?.isOnline ? 'online ' : 'offline '}></div>
          </div>
        )}
      </ImgContainer>
      <UserInfo chat={chat}>
        <p>{x?.name}</p>
        {children}
      </UserInfo>
    </UserWrapper>
  );
}

export default User;
