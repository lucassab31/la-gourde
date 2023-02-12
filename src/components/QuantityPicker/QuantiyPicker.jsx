import React from 'react';
import style from './QuantityPicker.module.scss';

const QuantityPicker = (props) => {
    const {quantity, onClickPlus, onClickMinus} = props;

    return (
        <div>
            <button onClick={onClickMinus} >-</button>
            <span>{quantity}</span>
            <button onClick={onClickPlus} >+</button>
        </div>
    )  

};

export default QuantityPicker;