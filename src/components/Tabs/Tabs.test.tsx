import React from 'react';
import { render } from '@testing-library/react';
import Tabs from './index';

describe('Tabs Component', () => {
  it('renders successfully', () => {
    const mockSocialLinkDetails = {
      link: 'some url',
      text: 'some text',
      logo: 'some logo',
    };

    const { getByAltText, getByText } = render(
      <Tabs data={mockSocialLinkDetails} />
    );
    expect(getByAltText(mockSocialLinkDetails.text)).toBeTruthy();
    expect(getByText(mockSocialLinkDetails.text)).toBeTruthy();
  });
});
