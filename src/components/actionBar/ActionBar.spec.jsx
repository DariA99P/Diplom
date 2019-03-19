import React from 'react';
import { shallow } from 'enzyme';

import ActionBar from '.';

describe('<ActionBar />', () => {
  let tree;
  beforeEach(() => {
    tree = shallow(<ActionBar />);
  });

  describe('On rendering', () => {
    it('should render properly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
