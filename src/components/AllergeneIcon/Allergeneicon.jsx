import React from 'react';
import style from './AllergeneIcon.module.scss';


const AllergeneIcon = (props) => {
    const { name, title } = props;
    const url = require(`../../images/icon/allergene/${name}`);
    return (
        <>
            <div className={style.allergene}>
                <img src={url} alt={title} />
            </div>
        </>
    );
}

export default AllergeneIcon;
