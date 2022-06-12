import React from 'react';

const Test4Name = ({user, onUserName}) => {
  return (
    <div>
      <h2>Name 컴포넌트</h2>
      <label>이름:</label>
      <input type="text" value={user} onChange={onUserName} />
      <span style={{marginLeft:10}}>{user}</span>
    </div>
  );
};

export default Test4Name;