import React from 'react';
import renderer from 'react-test-renderer';
import { SuperHeroListItem } from '..';
import MockHeroData from '../../mock/MockHeroData';

// Updated test case with a Link to a different address
it('renders correctly', () => {
    const tree = renderer
      .create(<SuperHeroListItem key={`otherHeros_1`} item={MockHeroData as any} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });