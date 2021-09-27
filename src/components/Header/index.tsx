import React from 'react';

const Header = ({ data }: { data: any }) => {
  const craftName = (): string => {
    let output = '';

    if (data.firstName) {
      output += data.firstName;
    }

    if (data.middleName) {
      output += ' ';
      output += data.middleName;
    }

    if (data.lastName) {
      output += ' ';
      output += data.lastName;
    }

    return output;
  };

  return (
    <div className='header'>
      <div className='header_sub'>
        <div className='header_grid'>
          <div>
            <img
              className='header_image'
              src={data.profilePicture}
              alt='profile'
            />
          </div>
          <div className='header_paragraph'>
            <p className='header_paragraph_name'>{craftName()}</p>
            <p>{data.title}</p>
            <p>{data.phone}</p>
            <p>{data.email}</p>
          </div>
        </div>
      </div>
      <p className='header_bio'>{data.bio}</p>
    </div>
  );
};

export default Header;
