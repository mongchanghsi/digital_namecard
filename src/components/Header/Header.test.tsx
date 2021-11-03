import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

let mockProfileDetails = {
  firstName: 'mockFirstName',
  middleName: 'mockMiddleName',
  lastName: 'mockLastName',
  email: 'mockEmail',
  phone: 'mockNumber',
  title: 'mockTitle',
  organization: 'mockOrganization',
  profilePicture: 'mockProfilePictureURL',
  bio: 'mockBio',
};

describe('Header Component', () => {
  it('renders successfully', () => {
    const { getByAltText, getByText } = render(
      <Header data={mockProfileDetails} />
    );
    expect(getByAltText(/profile/i)).toBeTruthy();
    expect(getByText(/mockFirstName/i)).toBeTruthy();
    expect(getByText(/mockMiddleName/i)).toBeTruthy();
    expect(getByText(/mockLastName/i)).toBeTruthy();
    expect(getByText(mockProfileDetails.email)).toBeTruthy();
    expect(getByText(mockProfileDetails.phone)).toBeTruthy();
    expect(getByText(mockProfileDetails.title)).toBeTruthy();
    expect(getByText(mockProfileDetails.bio)).toBeTruthy();
  });

  it('renders firstName and lastName', () => {
    mockProfileDetails = {
      ...mockProfileDetails,
      firstName: 'mockFirstName',
      middleName: '',
      lastName: 'mockLastName',
    };

    const { getByText } = render(<Header data={mockProfileDetails} />);
    expect(getByText(/mockFirstName mockLastName/i)).toBeTruthy();
  });

  it('renders firstName and middleName', () => {
    mockProfileDetails = {
      ...mockProfileDetails,
      firstName: 'mockFirstName',
      middleName: 'mockMiddleName',
      lastName: '',
    };

    const { getByText } = render(<Header data={mockProfileDetails} />);
    expect(getByText(/mockFirstName mockMiddleName/i)).toBeTruthy();
  });
});
