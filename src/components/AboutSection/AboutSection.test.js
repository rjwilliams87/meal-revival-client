import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AboutSection from './AboutSection';
configure({adapter: new Adapter()});

describe('<AboutSection />', () => {
    it('Renders without crashing', () => {
        shallow(<AboutSection />);
    })
})