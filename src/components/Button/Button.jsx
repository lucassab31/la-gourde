import React from 'react';
import style from './Button.module.scss';

const Button = (props) => {
    const { title, callback } = props;
    return (
        <button onClick={callback} className="btn btn-primary text-white">
            {title}
        </button>
    );
}

export default Button;
