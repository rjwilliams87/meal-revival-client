import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingNav from './Landing-Nav';
configure({adapter: new Adapter()});

describe('<LandingNav />', ()=>{
    it('Renders without crashing', () => {
        shallow(<LandingNav />);
    })
})
