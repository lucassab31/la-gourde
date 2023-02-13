import BackButton from "components/BackButton/BackButton";
import SmoothieIcon from "components/SmoothieIcon/SmoothieIcon";
import { useStore } from "contexts/store.context";
import creditCard from "../../images/credit_card.svg";
const { observer } = require("mobx-react-lite");

const Commande = observer(() => {
    const {cart} = useStore();
    const {products, totalPrice } = cart

  return (
    <div>
        <BackButton />
        <h1>Commande</h1>
        <div className="row mt-2 g-5">
            <div className="col-md-5 border-end border-secondary border-2">
                <img src={creditCard} className="img-fluid" alt="Image de carte de crédit" />
            </div>
            <div className="col-md-7">
                <ul className="list-group">
                    {products.map((product) => (
                    <li key={product.id} className="list-group-item">
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
                                </div>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <h3>Total</h3>
                    <p className="fw-bold fs-2 text-primary">{totalPrice}€</p>
                </div>
            </div>
        </div>
    </div>
  );
});

export default Commande;