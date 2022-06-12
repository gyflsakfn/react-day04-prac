import React from 'react';

const Test7Sub = ({onDel, onAdd1, onAdd2, onMod}) => {
  return (
    <div>
      <p>
        <botton onClick={() => onDel(1)}>1삭제</botton>
        <botton onClick={() => onDel(2)}>2삭제</botton>
      </p>
      <p>
        <botton onClick={onAdd1}>추가</botton>
        <botton onClick={() => onAdd2('전지현')}>추가</botton>
      </p>
      <p>
        <botton onClick={() => onMod(2)}>수정</botton>
        <botton onClick={onDel}>수정</botton>
      </p>
    </div>
  );
};

export default Test7Sub;