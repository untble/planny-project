import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';


const SignInForm = ({ buttonName, title, subtitle, mode, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();
    onSubmit(email, password, name, mode);
  };


  return <form onSubmit={handleOnSubmit}>
    <h1>{title}</h1>
    <div className='social-container'>
      <a href='#' className='social'><FontAwesomeIcon icon={faFacebook} /></a>
      <a href='#' className='social'><FontAwesomeIcon icon={faMailBulk} /></a>
      <a href='#' className='social'><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
    <span>{subtitle}</span>
    {mode && <input
      type='text'
      placeholder='Name'
      value={name}
      onChange={(e) => setName(e.target.value)}
    />}
    <input
      type='email'
      placeholder='Email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type='password'
      placeholder='Password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button className="auth-button">{buttonName}</button>
  </form>;
};

export default SignInForm;
