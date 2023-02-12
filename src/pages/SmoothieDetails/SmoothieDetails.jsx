import { useLoaderData } from "react-router-dom";
import { getSmoothieById } from "services/smoothies.product";
import { useStore } from "contexts/store.context";
import {useState} from 'react'

import SmoothieIcon from "components/SmoothieIcon/SmoothieIcon";
import Button from "components/Button/Button";
import BackButton from "components/BackButton/BackButton";
import AllergeneCard from "components/AllergeneCard/AllergeneCard";
import QuantityPicker from "components/QuantityPicker/QuantiyPicker";

export const smoothieLoader = async ({params}) => {
    const product = await getSmoothieById(+params.id);
    if (!product) throw new Response('', {
        status: 404,
        statusText: 'Produit non trouvé'
    })
    return product;
};

const SmoothieDetails = ()  => {
    const {cart: {addToCart}} = useStore();
    const product = useLoaderData();
    const {title, description, color, size, ingredients} = product;
    const [quantity, setQuantity] = useState(1)
    return (
        <div className="row" id="product_detail">
            <div className="col-12 py-3 d-flex align-items-end">
                    <BackButton />
            </div>
            <div className="col-6">
                <div className="d-flex flex-column justify-content-center">
                    <h3>Smoothie</h3>
                    <h1 className="fw-bold fs-1">{title}</h1>
                    <p>{description}</p>
                    <h2>{size[0] ? size[0].price+"€" : "À partir de 7€"}</h2>
                    <h4>Ingrédients</h4>
                    <ul className="ps-0">
                        {ingredients.map((ingredient) => (
                            <li key={ingredient.id} className="list-group-item">{ingredient.name}</li>
                        ))}
                    </ul>
                    <h4>Allérgènes</h4>
                    <AllergeneCard ingredients={ingredients} />
                    <QuantityPicker quantity={quantity} onClickPlus={()=>setQuantity(quantity + 1)} onClickMinus={()=>setQuantity(quantity - 1)}/>
                    <div className="mt-3">
                        <Button title="Ajouter au panier" callback={() => addToCart({...product, quantity})}/>
                    </div>
                </div>
                
            </div>
            <div className="col-6 position-relative overflow-hidden p-0">
                <div className="position-absolute col-12">
                    <SmoothieIcon color={color}  />
                </div>
            </div>
        </div>
    );
}

export default SmoothieDetails;

