import React from 'react';
import { shallow } from 'enzyme';

import Loader from '.';

describe('<Loader />', () => {
  describe('On rendering', () => {
    let tree;

    beforeEach(() => {
      tree = shallow(<Loader />);
    });

    describe('When some error during loading process occurs', () => {
      beforeEach(() => {
        tree.setProps({ error: true });
      });

      it('should render something idicating it', () => {
        expect(tree).toMatchSnapshot();
      });
    });

    describe('When loading process take considerable ammount time to finish', () => {
      beforeEach(() => {
        tree.setProps({ pastDelay: true });
      });

      it('should render loading animation', () => {
        expect(tree).toMatchSnapshot();
      });
    });

    describe('When no error occurs and loading process quickly finish ', () => {
      beforeEach(() => {
        tree.setProps({ error: false, pastDelay: false });
      });

      it('should render nothing', () => {
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
