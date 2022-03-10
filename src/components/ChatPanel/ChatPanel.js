import React from 'react';
import { ChatSection } from './ChatPanel.style';
export default function ChatPanel() {
  const date = new Date();
  const chatData = [
    {
      name: 'maj',
      text: "what's up",
      date: date.getTime() + 1,
    },
    {
      name: 'jed',
      text: 'hello People!',
      date: date.getTime() + 2,
    },
    {
      name: 'Kin',
      text: 'You all are doing great',
      date: date.getTime() + 3,
    },
  ];
  return (
    <ChatSection>
      <ul>
        {chatData.map((user) => {
          return (
            <li key={user.date}>
              <h3>
                {user.name}
                <span> {user.date}</span>
              </h3>
              <p>{user.text}</p>
            </li>
          );
        })}
      </ul>
      <div>
        <input type="text" placeholder="Message..." />
      </div>
    </ChatSection>
  );
}
