import React from 'react';
import Tabs from '../Tabs';
import IProfile from '../../utils/interface/Profile';
import ISocialLink from '../../utils/interface/SocialLink';

const Body = ({ data }: { data: IProfile }) => {
  return (
    <div className='body'>
      {data.links.map((link: ISocialLink, index: number) => (
        <div key={index}>
          <Tabs data={link} />
        </div>
      ))}
    </div>
  );
};

export default Body;
