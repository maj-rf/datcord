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
    {
      name: 'Aze',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sit ipsum, fugit quisquam reiciendis voluptates suscipit officiis, consequuntur eaque ex ipsam ducimus dicta. Magni, dolore.',
      date: date.getTime() + 4,
    },
    {
      name: 'Ginro',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolorem reiciendis labore corporis ullam expedita.',
      date: date.getTime() + 5,
    },
    {
      name: 'Kin',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quaerat natus nobis est eveniet accusantium. Veniam, sequi? Eligendi numquam eaque cumque quisquam ut? Doloremque deleniti doloribus ducimus rerum esse unde quisquam beatae at. Eius ullam numquam architecto odit consectetur ipsam, modi assumenda, dolore eveniet, ipsum officia mollitia cumque cum repellat!',
      date: date.getTime() + 6,
    },
    {
      name: 'Temari',
      text: 'You all are doing great',
      date: date.getTime() + 7,
    },
    {
      name: 'Lub',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolorem reiciendis labore corporis ullam expedita.',
      date: date.getTime() + 8,
    },
    {
      name: 'Rick',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolorem reiciendis labore corporis ullam expedita.',
      date: date.getTime() + 9,
    },
    {
      name: 'Morty',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolorem reiciendis labore corporis ullam expedita.',
      date: date.getTime() + 10,
    },
  ];
  return (
    <ChatSection>
      <h2># general</h2>
      <ul>
        <h1>Welcome to #general</h1>
        {chatData.map((user) => {
          return (
            <li key={user.date}>
              <div>image</div>
              <div>
                <h3>
                  {user.name} <span>{user.date}</span>
                </h3>
                <p>{user.text}</p>
              </div>
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
