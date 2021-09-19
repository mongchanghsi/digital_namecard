import React from 'react';
import vCardGenerator from '../../utils/vCard';
import AddIcon from '../../assets/addContact.png';

const AddContact = ({ data }: { data: any }) => {
  return (
    <button
      className='qr_button no_margin_bottom'
      onClick={() => vCardGenerator(data)}
    >
      <img className='qr_button_icon' src={AddIcon} alt='contact' />
      Add Contact
    </button>
  );
};

export default AddContact;
