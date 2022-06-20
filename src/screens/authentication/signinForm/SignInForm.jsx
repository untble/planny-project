import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { BiError } from 'react-icons/bi';
import { getAuth, updateProfile } from 'firebase/auth';


const SignInForm = ({ buttonName, title, subtitle, mode, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return <form className='form'
               onSubmit={handleSubmit(async (data) => {
                 const auth = getAuth()
                 console.log('data', data);
                 console.log('auth', auth);
                 onSubmit(data.userEmail, data.userPassword, data.userName, mode);
                 await updateProfile(auth.currentUser, {
                   displayName: data.userName,
                 }).then(res => console.log('user name', res)).catch(err => console.log(err));
                 console.log('auth2', auth);
               })}>
    <h1 className='header-1'>{title}</h1>
    <div className='social-container'>
      <a href='#' className='social link'><FontAwesomeIcon icon={faFacebook} /></a>
      <a href='#' className='social link'><FontAwesomeIcon icon={faMailBulk} /></a>
      <a href='#' className='social link'><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
    <span className='span-1'>{subtitle}</span>
    <div className='w-full'>
      {errors?.userName?.type === 'required' &&
      <p className='flex text-red-500'><BiError size={24} /> This field is required</p>}
      {errors?.userName?.type === 'minLength' && (
        <p className='flex text-red-500'><BiError size={24} /> Name length must be more then 5</p>
      )}

      <input
        type='email'
        placeholder='Email'
        className='input'
        {...register('userEmail', {
          required: true,
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        })}
      />
      {errors?.userEmail?.type === 'required' &&
      <p className='flex text-red-500 w-full'><BiError size={24} /> This field is required</p>}
      {errors?.userEmail?.type === 'pattern' && (
        <p className='flex text-red-500'><BiError size={24} /> Email should be valid!</p>
      )}
      <input
        type='password'
        placeholder='Password'
        className='input'
        {...register('userPassword', {
          required: true,
          minLength: 8,
        })}
      />
      {errors?.userPassword?.type === 'required' &&
      <p className='flex text-red-500'><BiError size={24} /> This field is required</p>}
      {errors?.userPassword?.type === 'minLength' && (
        <p className='flex text-red-500'><BiError size={24} /> Password length must be more then 8</p>
      )}
    </div>
    <button className='auth-button'>{buttonName}</button>
  </form>;
};

export default SignInForm;
