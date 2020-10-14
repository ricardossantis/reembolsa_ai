import React from 'react';
import {AproveButton, ReproveButton} from './styles';

const AproveButtons = (props) => {
    return (
        <div>
            <AproveButton onClick={props.onClick}>{props.name}</AproveButton>
            <ReproveButton onClick={props.onClick}>{props.name}</ReproveButton>
        </div>
    )
}

export default AproveButtons