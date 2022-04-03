import React from 'react';
import {
  ChannelSection,
  ChannelHead,
  ChannelList,
  ChannelUpper,
  ChannelLower,
  ChannelBtn,
} from './Channels.style';
import { NavLink } from 'react-router-dom';
import User from '../User/User';
function Channels({
  servers,
  serverChannels,
  currentUser,
  handleProfileView,
  addChannel,
  handleInputView,
  showInput,
  handleChange,
}) {
  return (
    <ChannelSection>
      <ChannelUpper>
        <ChannelHead>
          <h3>{servers[0]?.name}</h3>
        </ChannelHead>

        <ChannelList>
          <div>
            <span>v Text Channel</span>
            <ChannelBtn onClick={handleInputView}>
              {showInput ? 'x' : '+'}
            </ChannelBtn>
          </div>
          {showInput && (
            <form onSubmit={addChannel}>
              <input onChange={handleChange} placeholder="Name..."></input>
              <button type="submit">Create</button>
            </form>
          )}
          {serverChannels?.map((channel) => (
            <li key={channel.id}>
              <NavLink to={`/home/${channel.id}`}>
                <span>#</span> {channel.name}
              </NavLink>
            </li>
          ))}
        </ChannelList>
      </ChannelUpper>
      <ChannelLower>
        <User x={currentUser} primary />
        <ChannelBtn onClick={handleProfileView}>Set</ChannelBtn>
        {/* <button onClick={handleLogOut}>Logout</button> */}
      </ChannelLower>
    </ChannelSection>
  );
}

export default Channels;
