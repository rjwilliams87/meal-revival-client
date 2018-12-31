import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Register from './Register';

configure({adapter: new Adapter()});

describe('<Register />', () => {
    it('Renders without crashing', () => {
        shallow(<Register />)
    })
})