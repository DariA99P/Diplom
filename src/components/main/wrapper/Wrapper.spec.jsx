import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '.';

describe('<Wrapper />', () => {
  const tree = shallow(<Wrapper />);

  it('should renders properly', () => {
    expect(tree).toMatchSnapshot();
  });
});
