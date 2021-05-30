import React from 'react';
import renderer from 'react-test-renderer';
import NotNetwork from '../app/components/NotNetwork';

test('renders correctly', () => {
  const tree = renderer.create(<NotNetwork />).toJSON();
  expect(tree).toMatchSnapshot();
});
