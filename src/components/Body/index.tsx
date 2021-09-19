import React from 'react';
import Tabs from '../Tabs';

const Body = ({ data }: { data: any }) => {
  return (
    <div className='body'>
      {data.links.map((link: any, index: number) => (
        <div key={index}>
          <Tabs data={link} />
        </div>
      ))}
    </div>
  );
};

export default Body;
