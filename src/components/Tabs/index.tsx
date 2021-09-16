import React from 'react';

const Tabs = ({ data }: { data: any }) => {
  return (
    <a className='tab' href={data.link} target='_blank' rel='noreferrer'>
      <img className='tab_icon' src={data.logo} alt={data.text} /> {data.text}
    </a>
  );
};

export default Tabs;
