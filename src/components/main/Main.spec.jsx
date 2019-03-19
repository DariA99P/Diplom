import React from 'react';
import { shallow } from 'enzyme';

import Main from '.';

describe('<Main />', () => {
  let tree;
  beforeEach(() => {
    tree = shallow(<Main />);
  });

  describe('On rendering', () => {
    it('should renders properly', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Handling toggle state changes', () => {
    it('should update state properly', () => {
      const previousState = tree.state('collapsed');
      tree.instance().toggleSidebar();

      expect(tree.state('collapsed')).toEqual(!previousState);
    });
  });
});
