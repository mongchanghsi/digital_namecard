import React from 'react';
import './App.scss';
import Header from './components/Header';
import data from './utils/data/data';
import Body from './components/Body';
import QR from './components/QR';
import AddContact from './components/AddContact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <div className='App_sub'>
        <Header data={data} />
        <div className='App_CTA'>
          <QR />
          <AddContact data={data} />
        </div>
        <Body data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
