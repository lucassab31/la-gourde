import React from 'react';
import style from './QuantityPicker.module.scss';

const QuantityPicker = (props) => {
    const {quantity, onClickPlus, onClickMinus} = props;

    return (
        <div className={style.quantityPicker}>
            <button onClick={onClickMinus} className="btn btn-secondary" >-</button>
            <span>{quantity}</span>
            <button onClick={onClickPlus} className="btn btn-secondary" >+</button>
        </div>
    )  

};

export default QuantityPicker;