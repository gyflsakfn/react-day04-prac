import React from 'react';

const Test4Ani = ({ani, onAniName}) => {
  return (
    <div>
      <h2>Ani 컴포넌트</h2>
      <label>이름:</label>
      <input type="text" value={ani} onChange={onAniName} />
      <span style={{marginLeft:10}}>{ani}</span>
    </div>
  );
};

export default Test4Ani;