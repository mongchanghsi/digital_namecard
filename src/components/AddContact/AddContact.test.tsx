import React from 'react';
import { act, render } from '@testing-library/react';
import AddContact from './index';
import userEvent from '@testing-library/user-event';

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

describe('AddContact Component', () => {
  it('renders successfully', () => {
    const { getByRole, getByText } = render(
      <AddContact data={mockProfileDetails} />
    );
    expect(getByText(/add contact/i)).toBeTruthy();
    expect(getByRole('button', { name: /addcontactbutton/i })).toBeTruthy();
  });

  it('able to render buttons and text area after click', () => {
    const { getByRole } = render(<AddContact data={mockProfileDetails} />);

    const button = getByRole('button', { name: /addcontactbutton/i });

    act(() => {
      userEvent.click(button);
    });

    expect(getByRole('button', { name: /closeContactButton/i })).toBeTruthy();
    expect(getByRole('button', { name: /doneContactButton/i })).toBeTruthy();
    expect(getByRole('textbox', { name: /comment/i })).toBeTruthy();
  });

  it('able to type in textbox', () => {
    const mockComment = 'mockComment';

    const { getByRole } = render(<AddContact data={mockProfileDetails} />);

    const button = getByRole('button', { name: /addcontactbutton/i });

    act(() => {
      userEvent.click(button);
    });

    const textbox = getByRole('textbox', {
      name: /comment/i,
    }) as HTMLInputElement;

    userEvent.type(textbox, mockComment);
    expect(textbox.value).toEqual(mockComment);
  });

  it('able to hide content', () => {
    const { getByRole } = render(<AddContact data={mockProfileDetails} />);

    const button = getByRole('button', { name: /addcontactbutton/i });

    act(() => {
      userEvent.click(button);
    });

    const hideButton = getByRole('button', { name: /closeContactButton/i });

    act(() => {
      userEvent.click(hideButton);
    });

    expect(getByRole('button', { name: /addcontactbutton/i })).toBeTruthy();
  });
});
