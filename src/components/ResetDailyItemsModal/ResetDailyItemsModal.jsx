import React from 'react';
import UiModal from '../UI/UiModal/UiModal';
import UiTitle from '../UI/UiTitle/UiTitle';
import UiButton from '../UI/UiButton/UiButton';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { getAuth } from 'firebase/auth';

const ResetDailyItemsModal = ({ visible, setVisible }) => {
  return (
    <UiModal visible={visible} setVisible={setVisible}>
      <UiTitle title='Reset all daily goals' className='text-center font-medium text-3xl mb-12' />
      <p className="text-center font-medium text-lg">Are you sure you want to reset all daily goals?</p>
      <div className='mt-12 w-full flex items-center justify-end gap-3'>
        <UiButton type='button' variant='cancel' text='Cancel' onClick={() => setVisible(false)} />
        <UiButton variant='done' text='Yes' onClick={async () => {
          setVisible(false);
          await updateDoc(doc(db, 'plans', getAuth().currentUser.email), {
            plans: []
          })
        }}/>
      </div>
    </UiModal>
  );
};

export default ResetDailyItemsModal;
