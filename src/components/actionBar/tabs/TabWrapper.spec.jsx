import React from 'react';
import { shallow } from 'enzyme';

import TabWrapper from '.';

describe('<TabWrapper />', () => {
  let tree;
  beforeEach(() => {
    tree = shallow(<TabWrapper />);
  });

  describe('On rendering', () => {
    it('should render properly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
