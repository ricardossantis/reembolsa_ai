import React from 'react';
import {AproveButton, ReproveButton} from './styles';

const AproveButtons = (props) => {
    return (
        <div>
            <AproveButton onClick={props.aprove}>Aprovar</AproveButton>
            <ReproveButton onClick={props.reprove}>Reprovar</ReproveButton>
        </div>
    )
}

export default AproveButtons