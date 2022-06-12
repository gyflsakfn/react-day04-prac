import React, { useState } from 'react';
import Test4Ani from './Test4Ani';
import Test4Dis from './Test4Dis';
import Test4Name from './Test4Name';

const Test4 = () => {
  const [ user, setUserName ] = useState('')
  const [ ani, setAni ] = useState('')

  const onUser = (e) => {
    setUserName( e.target.value )
  }
  const onAni = (e) => {
    setAni( e.target.value )
  }

  
  return (
    <div>
      <Test4Name user={user} onUserName={onUser} />
      <hr />
      <Test4Ani ani={ani} onAniName={onAni}/>
      <hr />
      <Test4Dis user={user} ani={ani}/>
    </div>
  );
};

export default Test4;