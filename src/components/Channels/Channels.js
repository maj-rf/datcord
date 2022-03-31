import React from 'react';
import { ChannelSection } from './Channels.style';
import { NavLink } from 'react-router-dom';
import User from '../User/User';
function Channels({ servers, serverChannels, currentUser, handleProfileView }) {
  return (
    <ChannelSection>
      <div>
        <div className="channel-head">
          <h3>{servers[0]?.name}</h3>
        </div>

        <ul>
          <span>v Text Channel</span>
          {serverChannels?.map((channel) => (
            <li key={channel.id}>
              <NavLink to={`/home/${channel.id}`}>
                <span>#</span> {channel.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="user-div">
        <User x={currentUser} />
        <button onClick={handleProfileView}>Set</button>
        {/* <button onClick={handleLogOut}>Logout</button> */}
      </div>
    </ChannelSection>
  );
}

export default Channels;
