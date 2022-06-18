import React, { useState } from 'react';
import UiModal from '../UI/UiModal/UiModal';
import { useForm } from 'react-hook-form';
import UiTitle from '../UI/UiTitle/UiTitle';
import UiButton from '../UI/UiButton/UiButton';
import { BiError } from 'react-icons/bi';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import './time-picker.css';


const AddDailyGoalItemModal = ({ visible, setVisible }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const format = 'h:mm';
  const now = moment()  ;
  const [state, setState] = useState(now);
  const handleChange = (value) => {
    setState(value)
  }

  return (
    <UiModal visible={visible} setVisible={setVisible}>
      <UiTitle title='Add daily goal' className='text-center font-medium text-3xl mb-12' />
      <form className='flex flex-col gap-4' onSubmit={handleSubmit((data) => console.log(data.goalTitle, data.goalDescription, state.toDate().toTimeString())
      )}>
        <div>
          <label className='font-medium text-lg'>Goal Title</label>
          <input
            className='input'
            placeholder='Title'
            {...register('goalTitle', {
              required: true,
              minLength: 5,
            })}
          />
          {errors?.goalTitle?.type === 'required' &&
            <p className='flex text-red-500'><BiError size={24} /> This field is required</p>}
          {errors?.goalTitle?.type === 'minLength' && (
            <p className='flex text-red-500'><BiError size={24} /> Title must be more then 5 characters</p>
          )}
        </div>
        <div>
          <label className='font-medium text-lg'>Goal Description</label>
          <textarea
            className='input '
            {...register('goalDescription', {
              required: true,
              minLength: 5,
            })}
          />
          {errors?.goalDescription?.type === 'required' &&
            <p className='flex text-red-500'><BiError size={24} /> This field is required</p>}
          {errors?.goalDescription?.type === 'minLength' && (
            <p className='flex text-red-500'><BiError size={24} /> Description must be more then 5 characters</p>
          )}
        </div>
        <div className='flex flex-col'>
          <label className='font-medium text-lg'>Choose time</label>
          <TimePicker
            showSecond={false}
            // defaultValue={now}
            value={state}
            allowEmpty={false}
            format={format}
            onChange={handleChange}
            inputReadOnly
          />
        </div>
        <div className='mt-12 w-full flex items-center justify-end gap-3'>
          <UiButton type='button' variant='cancel' text='Cancel' onClick={() => setVisible(false)} />
          <UiButton variant='done' text='Save' />
        </div>
      </form>
    </UiModal>
  );
};

export default AddDailyGoalItemModal;
