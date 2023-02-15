import BackButton from "components/BackButton/BackButton";
import SmoothieIcon from "components/SmoothieIcon/SmoothieIcon";
import { useStore } from "contexts/store.context";
import { Link } from "react-router-dom";
import creditCard from "../../images/credit_card.svg";
const { observer } = require("mobx-react-lite");

const Commande = observer(() => {
    const {cart} = useStore();
    const {products, totalPrice } = cart;

    const changeCardNumber = (e) => {
        if (e.target.value.length === 4 || e.target.value.length === 9 || e.target.value.length === 14) {
            e.target.value += " ";
        }
    }

    const changeCardDate = (e) => {
        if (e.target.value.length === 2) {
            e.target.value += "/";
        }
    }

  return (
    <div>
        <BackButton />
        <div className="row mt-2 g-5">
            <div className="col-md-5 border-end border-secondary border-2">
                <img src={creditCard} className="img-fluid" alt="Image de carte de crédit" />
            </div>
            <div className="col-md-7">
                <h1>Paiement</h1>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nom</label>
                        <input type="text" className="form-control" id="name" placeholder="Jean Dupont" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cardNumber" className="form-label">Numéro de carte</label>
                        <input type="text" onKeyDown={changeCardNumber} maxLength={19} className="form-control" id="cardNumber" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="cardDate" className="form-label">Date d'expiration</label>
                                <input type="text" pattern="[0-9]{2}/[0-9]{2}" onKeyDown={changeCardDate} maxLength={5} className="form-control" id="cardDate" placeholder="MM/YY" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="cardCVC" className="form-label">CVC/CVV</label>
                                <input type="password" maxLength={3} className="form-control" id="cardCVC" placeholder="000" />
                            </div>
                        </div>
                    </div>
                </form>
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
                                    <p className="m-0">{product.quantity} x {product.size[0].price}€</p>
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
                <Link to="/recap" className="btn btn-primary w-100 mt-2 text-white fw-bold btn-lg">Payer</Link>
            </div>
        </div>
    </div>
  );
});

export default Commande;