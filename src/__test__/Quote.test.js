import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Quote', () => {
  test('should match the snapShot', () => {
    const component = renderer.create(<Quote />);
    const instance = component.toJSON();
    expect(instance).toMatchSnapshot();
  });
});
