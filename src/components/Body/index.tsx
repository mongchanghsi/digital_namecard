import React from 'react';
import Tabs from '../Tabs';

const Body = ({ data }: { data: any }) => {
  return (
    <div className='body'>
      {data.links.map((link: any) => (
        <Tabs data={link} />
      ))}
    </div>
  );
};

export default Body;
