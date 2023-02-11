import React from 'react';

const Button = (props) => {
    const { title, callback } = props;
    return (
        <button onClick={callback} className="button">
            {title}
        </button>
    );
}

export default Button;
