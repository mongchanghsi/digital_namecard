import React from 'react';
import ISocialLink from '../../utils/interface/SocialLink';

const Tabs = ({ data }: { data: ISocialLink }) => {
  return (
    <a className='tab' href={data.link} target='_blank' rel='noreferrer'>
      <img className='tab_icon' src={data.logo} alt={data.text} /> {data.text}
    </a>
  );
};

export default Tabs;
