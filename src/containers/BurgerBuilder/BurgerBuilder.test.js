import React from 'react';
import {BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Adapter from 'enzyme-adapter-react-16';

import {configure, shallow} from 'enzyme';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onIngredientInit={() => {}}/>);
    })
    it('should render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ings: {salad: 1, meat: 2}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    })
})
