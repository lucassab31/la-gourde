import { Link } from "react-router-dom";
import thanks from "../../images/thanks.svg";

const Recap = () => {
  return (
    <div className="card mx-auto w-50 border-secondary">
      <div className="card-header">
        <h1 className="card-title text-center">Votre commande est passé</h1>
      </div>
      <div className="card-body text-center">
        <p className="card-title">
          Merci d'avoir passé votre commande, elle vous sera remise au plus
          vite.
        </p>
        <img
          src={thanks}
          className="img-fluid w-50 mx-auto my-4"
          alt="Remerciement"
        />
        <p className="text-muted text-center">
          Vous allez recevoir un e-mail récapitulatif de votre commande
        </p>
      </div>
      <div className="card-footer text-center">
        <Link to="/" className="btn btn-primary text-white">
          Accueil
        </Link>
      </div>
    </div>
  );
};

export default Recap;
