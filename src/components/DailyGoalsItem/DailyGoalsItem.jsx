import React from 'react';
import UiCard from '../UI/UiCard/UiCard';
import UiTitle from '../UI/UiTitle/UiTitle';
import UiButton from '../UI/UiButton/UiButton';
import { FiTrash2, MdDone, AiOutlineEdit } from 'react-icons/all';

const DailyGoalsItem = ({ id, name, description, deadline }) => {
  return (
    <div className='flex items-center px-12'>
      <span className='font-medium text-lg'>{deadline}</span>
      <div className='mx-8 flex items-center'>
        <div className='w-10 h-0.5 bg-black' />
        <div className='rounded-full w-5 h-5 border-2 border-black' />
        <div className='w-10 h-0.5 bg-black' />
      </div>
      <UiCard className='flex flex-col w-full' backgroundColor="bg-blue-100">
        <div className='flex flex-col items-center gap-6'>
          <UiTitle title={name} className='font-medium text-2xl' />
          <span className='text-lg'>{description}</span>
        </div>
        <div className='flex justify-end items-center mt-8 gap-3 flex-wrap'>
          <UiButton variant='done' text='Done'>
            <MdDone size={24} />
          </UiButton>
          <UiButton variant='edit' text='Edit'>
            <AiOutlineEdit size={24} />
          </UiButton>
          <UiButton variant='delete' text='Delete'>
            <FiTrash2 size={24} />
          </UiButton>
        </div>
      </UiCard>
    </div>
  );
};

export default DailyGoalsItem;
