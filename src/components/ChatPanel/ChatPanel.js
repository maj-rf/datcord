import React from 'react';
import { ChatSection } from './ChatPanel.style';
import { useParams } from 'react-router-dom';
import { getChannelMessages } from '../../data';
export default function ChatPanel() {
  let { channelId = '10001' } = useParams();
  let channelData = getChannelMessages(channelId);

  return (
    <ChatSection>
      <div className="channel-name">
        <h3># {channelData.name}</h3>
      </div>

      <ul>
        <h1>Welcome to #{channelData.name}</h1>
        {channelData.messages.map((msg) => {
          return (
            <li key={msg.id}>
              <div>image</div>
              <div>
                <h3>{msg.owner.name}</h3>
                <p>{msg.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="msg-container">
        <input type="text" placeholder="Message..." />
      </div>
    </ChatSection>
  );
}
