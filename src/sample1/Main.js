import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import './style.css'

const Main = () => {
  const [ form, setForm] = useState({
    username:'',
    age:'',
    addr:'',
    tel:'',
    job:'',
    email:'',
    sex:'',
    inter:''
  })
  const [ step, setStep ] = useState(1)

  const { username, age, addr, tel, job, email, sex, inter } = form

  const prevPage = (e) => {
    setStep(step-1)
  }
  const nextPage = (e) => {
    setStep(step+1)
  }

  const changeInput = (e) => {
    const {name, value} = e.target
    setForm({
      ...form,
      [name] : value
    })
  }

  return (
    <div className='wrap'>
      {
        step === 1 &&
        <Step1 nextPage={nextPage} changeInput={changeInput} username={username} age={age} addr={addr} tel={tel} />
      }
      {
        step === 2 &&
        <Step2 prevPage={prevPage} nextPage={nextPage} changeInput={changeInput} job={job} email={email} sex={sex} inter={inter} />
      }
      {
        step === 3 &&
        <Step3 nextPage={nextPage} username={username} age={age} addr={addr} tel={tel} job={job} email={email} sex={sex} inter={inter} />
      }
      {
        step === 4 &&
        <Step4 username={username} />
      }
    </div>
  );
};

export default Main;