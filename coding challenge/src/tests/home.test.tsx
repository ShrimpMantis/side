import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from "components/home";
import {getData} from 'services/index';

Enzyme.configure({ adapter: new Adapter() });
const mockResult={
    data:"testData"
}


describe('Home component loads',()=>{
    let data="";
    it('should render the home component',()=>{
        const wrapper= shallow(<Home/>);
       
    });
});


