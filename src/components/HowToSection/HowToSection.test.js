import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HowToSection from './HowToSection';
configure({adapter: new Adapter()});

describe('<HowToSection />', () => {
    it('Renders without crashing', () =>{
        shallow(<HowToSection />)
    })
})