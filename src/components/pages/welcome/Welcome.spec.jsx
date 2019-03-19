import React from 'react';
import renderer from 'react-test-renderer';

import Welcome from '.';

describe('<Welcome />', () => {
  let tree;
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({ text: () => '# Hello' }));
    tree = renderer.create(<Welcome />).toJSON();
  });

  it('should renders properly', () => {
    expect(tree).toMatchSnapshot();
  });
});
