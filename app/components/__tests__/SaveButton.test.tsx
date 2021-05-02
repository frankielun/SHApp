import React from 'react';
import renderer from 'react-test-renderer';
import { SaveButton } from '..';

// Updated test case with a Link to a different address
it('renders correctly', () => {
    const tree = renderer
      .create(<SaveButton isSaved={true} onSave={() => {}} onUnSave={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });