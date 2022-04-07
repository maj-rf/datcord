import React from 'react';
import {
  ChannelSection,
  ChannelHead,
  ChannelList,
  ChannelUpper,
  ChannelLower,
  PlusBtn,
  SettingsBtn,
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
            {showInput ? (
              <PlusBtn size="30" onClick={handleInputView} close />
            ) : (
              <PlusBtn size="30" onClick={handleInputView} />
            )}
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
        <SettingsBtn size="30" onClick={handleProfileView} />
      </ChannelLower>
    </ChannelSection>
  );
}

export default Channels;
