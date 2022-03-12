import { ChannelSection } from './Channels.style';
import React from 'react';

function Channels({ user, logout }) {
  return (
    <ChannelSection>
      <div>
        <h3>Playground</h3>
        <ul>
          <span>v Text Channel</span>
          <li>
            <span>#</span> general
          </li>
          <li>
            <span>#</span> spam-city
          </li>
          <li>
            <span>#</span> off-topic
          </li>
          <li>
            <span>#</span> channel
          </li>
        </ul>

        <ul>
          <span>v Gaming</span>
          <li>
            <span>#</span> Switch
          </li>
          <li>
            <span>#</span> PS
          </li>
          <li>
            <span>#</span> Xbox
          </li>
          <li>
            <span>#</span> PC
          </li>
        </ul>
      </div>
      <div>
        <p>{user?.email}</p>
        {/* ^ checks if user.email exists and show if true */}
        <button onClick={logout}>Logout</button>
      </div>
    </ChannelSection>
  );
}

export default Channels;
