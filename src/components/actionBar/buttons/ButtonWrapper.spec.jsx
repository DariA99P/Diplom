import React from 'react';
import { shallow } from 'enzyme';

import ButtonWrapper from '.';

describe('<ButtonWrapper />', () => {
  let tree;
  beforeEach(() => {
    tree = shallow(<ButtonWrapper />);
  });

  describe('On rendering', () => {
    it('should render properly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
