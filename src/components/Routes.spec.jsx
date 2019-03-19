import React from 'react';
import { shallow } from 'enzyme';

import Routes from './Routes';

describe('<Routes />', () => {
  it('should render properly', () => {
    const tree = shallow(<Routes />);

    expect(tree).toMatchSnapshot();
  });
});
