import React from 'react';
import { shallow } from 'enzyme';

import ActionWrapper from '.';

describe('<ActionWrapper />', () => {
  let tree;
  beforeEach(() => {
    tree = shallow(<ActionWrapper />);
  });

  describe('On rendering', () => {
    it('should render properly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
