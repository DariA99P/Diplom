import React from 'react';
import { shallow } from 'enzyme';

import { BreadcrumbComponent } from '.';

jest.mock('constants/breadcrumbNameMap', () => ({
  '/home': 'Home',
  '/home/users': 'Users',
  '/home/users/my-account': 'My Account',
}));

describe('<Breadcrumb />', () => {
  describe('On rendering', () => {
    const location = { pathname: 'home/users/my-account' };

    it('should renders properly', () => {
      const wrapper = shallow(<BreadcrumbComponent location={location} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
