import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '.';

describe('<Header />', () => {
  let wrapper;
  describe('On rendering', () => {
    let toggle;

    beforeEach(() => {
      toggle = jest.fn();
      wrapper = shallow(<Header toggle={toggle} />);
    });

    describe('When header is collapsed', () => {
      beforeEach(() => {
        wrapper.setProps({ collapsed: true });
      });

      it('should render toggle button on header', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('Should call handle toggle function when clicked', () => {
        wrapper.find('Icon').first().simulate('click');
        expect(toggle.mock.calls.length).toEqual(1);
      });
    });

    describe('When header is not collapsed', () => {
      beforeEach(() => {
        wrapper.setProps({ collapsed: false });
      });

      it('should not render toggle button on header', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
