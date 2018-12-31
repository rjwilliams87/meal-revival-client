import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignupSection from './SignupSection';

configure({adapter: new Adapter()});

describe('<SignupSection />', () => {
    it('Renders without crashing', () => {
        shallow(<SignupSection />)
    })
})