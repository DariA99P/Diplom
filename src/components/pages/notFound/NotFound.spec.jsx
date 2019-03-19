import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '.';

describe('<NotFound />', () => {
  describe('When rendering', () => {
    const tree = shallow(<NotFound />);

    it('should renders properly', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('When back button is clicked', () => {
    const goBack = jest.fn();
    const history = { goBack };
    const wrapper = shallow(<NotFound history={history} />);

    it('should redirects to back page', () => {
      wrapper.find('Button').simulate('click');
      expect(goBack).toMatchSnapshot();
    });
  });
});
