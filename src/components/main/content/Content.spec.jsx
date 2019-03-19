import React from 'react';
import { shallow } from 'enzyme';

import Content from '.';

describe('<Content />', () => {
  const tree = shallow(<Content />);

  it('should renders properly', () => {
    expect(tree).toMatchSnapshot();
  });
});
