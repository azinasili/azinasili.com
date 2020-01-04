import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Car detail', () => {
  test('renders correctly', () => {
    const footer = shallow(<Footer />);

    expect(footer.find('p')).toHaveLength(1);
  });
});
