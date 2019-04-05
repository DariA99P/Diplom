import React from 'react';
import { shallow } from 'enzyme';

import TagComponent from './Tag';

jest.mock('utils/environmentDefinition', () => () => ({
  code: 'DEV',
  color: 'blue',
  label: 'Dev Environment',
}));

describe('<Tag />', () => {
  describe('On rendering', () => {
    describe('When appliction environment is defferent from PROD', () => {
      const tree = shallow(<TagComponent />);

      it('should renders a tag informing the environment', () => {
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
