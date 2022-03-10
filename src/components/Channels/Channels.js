import { ChannelSection } from './Channels.style';
import React from 'react';

function Channels() {
  return (
    <ChannelSection>
      <h3>Playground</h3>
      <ul>
        <span>v Text Channel</span>
        <li># general</li>
        <li># spam-city</li>
        <li># off-topic</li>
        <li># channel</li>
      </ul>

      <ul>
        <span>v Gaming</span>
        <li># Switch</li>
        <li># PS</li>
        <li># Xbox</li>
        <li># PC</li>
      </ul>
    </ChannelSection>
  );
}

export default Channels;
