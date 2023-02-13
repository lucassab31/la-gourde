import { useStore } from "contexts/store.context";
import { observer } from "mobx-react-lite";
import QuantityPicker from "components/QuantityPicker/QuantiyPicker";
import BackButton from "components/BackButton/BackButton";
import Button from "components/Button/Button";
import SmoothieIcon from "components/SmoothieIcon/SmoothieIcon";
import { Link } from "react-router-dom";

const Cart = observer(() => {
  const {cart} = useStore();
  const {products, removeFromCart, totalPrice, resetCart } = cart

  return (
    <>
        <div className="row rounded-4" id="cart">
            <div className="col-12 py-3">
                <BackButton />
            </div>
            <div className="col-6 mx-auto px-5">
                <div className="card p-3">
                    <h1>Votre Panier </h1>
                    <ul className="ps-0 pt-5">
                        {products.map((product) => (
                        <li key={product.id} className="card p-3 mb-3">
                            <div className="d-flex align-items-center ">
                                <div style={{width:"40px"}}>
                                    <SmoothieIcon color={product.color} />
                                </div>
                                <div className="ms-3 w-100">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h4>{product.title}</h4>
                                        <p className="m-0">{product.size[0].price}€ /unité</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Taille : {product.size[0].name} </p>
                                        <QuantityPicker quantity={product.quantity} onClickPlus={product.increment} onClickMinus={product.decrement} />
                                    </div>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                    <div>
                        <div className="d-flex align-items-center justify-content-between">
                            <h3>Total</h3>
                        <p className="m-0">{totalPrice}€</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <Button title="Vider le panier" callback={resetCart} styleClass="btn btn-secondary" />
                            <Link className="btn btn-primary text-white fw-bold" to="/commande">Commander</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
});

export default Cart;
