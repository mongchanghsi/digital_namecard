import React from 'react';
import './App.scss';
import Header from './components/Header';
import mockData from './utils/mockData/mockJson';
import Body from './components/Body';
import QR from './components/QR';
import AddContact from './components/AddContact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <div className='App_sub'>
        <Header data={mockData} />
        <div className='App_CTA'>
          <QR />
          <AddContact data={mockData} />
        </div>
        <Body data={mockData} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
