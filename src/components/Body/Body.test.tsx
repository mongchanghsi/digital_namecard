import React from 'react';
import { render } from '@testing-library/react';
import Body from './index';

describe('Body Component', () => {
  it('renders successfully', () => {
    const mockProfileDetails = {
      firstName: 'mockFirstName',
      middleName: 'mockMiddleName',
      lastName: 'mockLastName',
      email: 'mockEmail',
      phone: 'mockNumber',
      title: 'mockTitle',
      organization: 'mockOrganization',
      profilePicture: 'mockProfilePictureURL',
      bio: 'mockBio',
      links: [
        {
          link: 'some url1',
          text: 'some text1',
          logo: 'some logo1',
        },
        {
          link: 'some url2',
          text: 'some text2',
          logo: 'some logo2',
        },
      ],
    };

    const { getByText } = render(<Body data={mockProfileDetails} />);
    expect(getByText(mockProfileDetails.links[0].text)).toBeTruthy();
    expect(getByText(mockProfileDetails.links[1].text)).toBeTruthy();
  });
});
