import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropertyCard from 'components/propertyCard';
import { Property } from 'models';
import PropTypes from 'prop-types';

Enzyme.configure({ adapter: new Adapter() });
const mockResult={
    data:"testData"
}

describe('PropertyCard component loads',()=>{
    let data="";
    const mockHandler=()=>{
        data="testData"
    };

    it('should render the home component',()=>{
       
        const mockProperty:Property={
            address:"420 gully",
            area:900,
            baths:{full:1,half:2},
            bedrooms:3,
            favorite:true,
            id:"1",
            listDate:"24th march 2021",
            listPrice:4000,
            photos: [
                {
                    description:"good pic",
                    path:"nice path"
                }
            ]

        };
      
        const wrapper= shallow(<PropertyCard isFavoriteHandler={mockHandler} property={mockProperty}/>);
        expect(wrapper.childAt(1).props().children.props.src).toEqual(mockProperty.photos[0].path);
    });
});


