import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '.';

describe('<Sidebar />', () => {
  let toggle;
  let wrapper;

  beforeEach(() => {
    toggle = jest.fn();
    wrapper = shallow(<Sidebar toggle={toggle} />);
  });

  describe('When rendering', () => {
    it('should renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When toggle icon is clicked', () => {
    it('should toggle Sidebar collpased state', () => {
      wrapper.find('Icon').simulate('click');
      expect(toggle).toHaveBeenCalled();
    });
  });
});
