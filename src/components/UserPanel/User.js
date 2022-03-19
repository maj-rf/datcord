import React from 'react';

function User({ x }) {
  return (
    <li>
      <div className="user-info">
        <div className={x.isOnline ? 'online ' : 'offline '}></div>
        <p>{x.name}</p>
      </div>
    </li>
  );
}

export default User;
