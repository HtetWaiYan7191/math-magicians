import React from 'react';
import renderer from 'react-test-renderer';
import Buttons from '../components/Buttons';

describe('Buttons', () => {
  test('should render the Button component', () => {
    const handleInput = jest.fn();

    const component = renderer.create(<Buttons number="1" handleInput={handleInput} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree = component.root;
    expect(tree.findByType(Buttons).props.number).toBe('1');
  });
});
