import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import Clock from '.';

jest.useFakeTimers();

describe('<Clock />', () => {
  let tree;
  const dateTime = moment('2018-07-27 09:00:00').format('ddd DD MMM HH:mm');

  beforeEach(() => {
    tree = shallow(<Clock />);
    tree.setState({
      dateTime,
    });
  });

  describe('On rendering', () => {
    it('should renders properly', () => {
      expect(tree).toBeDefined();
    });
  });

  describe('handling time change', () => {
    it('should update state properly', () => {
      tree.instance().tick();
      expect(tree.state('dateTime')).not.toEqual(dateTime);
    });
  });
});
