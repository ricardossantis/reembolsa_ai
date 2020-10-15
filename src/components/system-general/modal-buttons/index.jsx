import React from 'react';
import {AlterButton} from './styles';

const ModalButtons = (props) => {
    return (
        <div>
            <AlterButton onClick={props.onClick}>{props.name}</AlterButton>
        </div>
    )
}

export default ModalButtons