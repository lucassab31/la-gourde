import React from 'react';
import AllergeneIcon from 'components/AllergeneIcon/Allergeneicon';
// import style from './AllergeneCard.module.scss';


const AllergeneCard = (props) => {
    const { ingredients } = props;
    return (
        <>
            <ul className="d-flex list-unstyled mt-auto">
                {ingredients.map((ingredient) => (
                    <AllergeneIcon key={ingredient.id} name={ingredient.allergens[0].icon} title={ingredient.allergens[0].title} />
                ))}
            </ul>
        </>
    );
}

export default AllergeneCard;
