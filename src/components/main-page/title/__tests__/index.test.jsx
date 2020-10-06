import React from 'react';
import Title from '../index';
import renderer from 'react-test-renderer';

it("Title", () =>{
    const tree = renderer
    .create(<Title bckTitle="#365083" colorTitle="#FFFFFF">{'Test'}</Title>)
    .toJSON();

    expect(tree).toMatchSnapshot();
});