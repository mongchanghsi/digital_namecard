import React, { useState } from 'react';
import vCardGenerator from '../../utils/vCard';
import AddIcon from '../../assets/addContact.png';
import CloseIcon from '../../assets/close.png';
import IProfile from '../../utils/interface/Profile';

const AddContact = ({ data }: { data: IProfile }) => {
  const [openTab, setOpenTab] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  return (
    <>
      {openTab ? (
        <div>
          <textarea
            aria-label='comment'
            id='w3review'
            name='w3review'
            rows={4}
            cols={30}
            placeholder='[Optional] Write in a message to remember our interaction!'
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className='contact_grid'>
            <button
              aria-label='doneContactButton'
              className='contact_button no_margin_bottom'
              onClick={() => vCardGenerator(data, text)}
            >
              <img
                className='contact_button_icon'
                src={AddIcon}
                alt='add contact'
              />
              Done
            </button>
            <button
              aria-label='closeContactButton'
              className='contact_button no_margin_bottom'
              onClick={() => setOpenTab(false)}
            >
              <img
                className='contact_button_icon'
                src={CloseIcon}
                alt='close tab'
              />
              Close
            </button>
          </div>
        </div>
      ) : (
        <button
          aria-label='addContactButton'
          className='qr_button no_margin_bottom'
          onClick={() => setOpenTab(true)}
        >
          <img className='qr_button_icon' src={AddIcon} alt='contact' />
          Add Contact
        </button>
      )}
    </>
  );
};

export default AddContact;
