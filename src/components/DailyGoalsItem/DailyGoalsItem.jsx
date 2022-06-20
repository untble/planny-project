import React, { useState } from 'react';
import UiCard from '../UI/UiCard/UiCard';
import UiTitle from '../UI/UiTitle/UiTitle';
import UiButton from '../UI/UiButton/UiButton';
import { FiTrash2, MdDone, AiOutlineEdit } from 'react-icons/all';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { getAuth } from 'firebase/auth';

const DailyGoalsItem = ({ id, name, description, deadline, done, deleteItem, toggleItem, plans, setPlans }) => {
  const [editMode, setEditMode] = useState(false);
  const [stateDeadline, setStateDeadline] = useState(deadline);
  const [stateTitle, setStateTitle] = useState(name);
  const [stateDescription, setStateDescription] = useState(description);

  const editPlan = async () => {
    if (editMode) {
      const filtered = plans.map(item => {
        if (item.id === id) {
          item.description = stateDescription;
          item.title = stateTitle;
          item.time = stateDeadline;
        }
        return item;
      });
      await updateDoc(doc(db, 'plans', getAuth().currentUser.email), {
        plans: filtered,
      });
      setPlans(filtered);
    }
  };

  return (
    <div className='flex items-center px-12'>
      {editMode ? <input type='text' value={stateDeadline} onChange={(e) => setStateDeadline(e.target.value)}
                         style={{ backgroundColor: '#DBEAFE' }} /> :
        <span className='font-medium text-lg'>{stateDeadline}</span>}
      <div className='mx-8 flex items-center'>
        <div className='w-10 h-0.5 bg-black' />
        <div className='rounded-full w-5 h-5 border-2 border-black' />
        <div className='w-10 h-0.5 bg-black' />
      </div>
      <UiCard className='flex flex-col w-full' backgroundColor={`bg-blue-${done ? 400 : 100}`}>
        <div className='flex flex-col items-center gap-6'>
          {editMode ? <input type='text' className='font-medium text-2xl' value={stateTitle}
                             onChange={(e) => setStateTitle(e.target.value)} /> :
            <UiTitle title={stateTitle} className='font-medium text-2xl' />}

          {editMode ? <textarea className='text-xl w-full h-32'
                                onChange={(e) => setStateDescription(e.target.value)}>{stateDescription}</textarea> :
            <textarea disabled readOnly className='text-xl w-full h-32' style={{
              backgroundColor: done ? '#60A5FA ' : '#DBEAFE',
              resize: 'none',
            }}>{stateDescription}</textarea>}
        </div>
        <div className='flex justify-end items-center mt-8 gap-3 flex-wrap'>
          <UiButton variant='done' text={`${done ? 'UNDONE' : 'DONE'}`} onClick={() => toggleItem(id)}>
            <MdDone size={24} />
          </UiButton>
          <UiButton variant='edit' text={editMode ? 'Save' : 'Edit'} onClick={() => {
            setEditMode(!editMode);
            editPlan();
          }}>
            <AiOutlineEdit size={24} />
          </UiButton>
          <UiButton variant='delete' text='Delete' onClick={() => deleteItem(id)}>
            <FiTrash2 size={24} />
          </UiButton>
        </div>
      </UiCard>
    </div>
  );
};

export default DailyGoalsItem;
