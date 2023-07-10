import React from "react";
import renderer from 'react-test-renderer'
import Calculator from '../components/Calculator';

describe('Calculator', () => {
    test('should render the component', () => {
        const component = renderer.create(<Calculator/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})