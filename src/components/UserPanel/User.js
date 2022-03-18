import React from 'react';

function User({ x }) {
  return (
    <li>
      <div className="user-info">
        <div className={x.isOnline ? 'online ' : 'offline '}></div>
        <p>{x.email}</p>
      </div>
    </li>
  );
}

export default User;
