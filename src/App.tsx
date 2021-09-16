import React from 'react';
import './App.scss';
import Header from './components/Header';
import mockData from './utils/mockData/mockJson.json';
import Body from './components/Body';
import QR from './components/QR';
import vCardGenerator from './utils/vCard';

const App = () => {
  return (
    <div className='App'>
      <Header data={mockData} />
      <div className='App_CTA'>
        <QR />
        <button className='qr_button' onClick={() => vCardGenerator(mockData)}>
          <img
            className='qr_button_icon'
            src='https://icon-library.com/images/add-contact-icon/add-contact-icon-25.jpg'
            alt='contact'
          />
          <p>Add Contact</p>
        </button>
      </div>

      <Body data={mockData} />
    </div>
  );
};

export default App;
