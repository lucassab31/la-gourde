import SmoothieIcon from "components/SmoothieIcon/SmoothieIcon";
import AllergeneCard from "components/AllergeneCard/AllergeneCard";
import { Link } from "react-router-dom";

const SmoothieCard = ({ smoothie }) => {
  let bIngredients = true;
  if (smoothie.ingredients.length === 0) {
    bIngredients = false;
  }
  return (
    <>
      <div className="col-md-6 p-lg-5 mx-5 my-5 text-white">
        <h1 className="mb-4 display-6 lh-1 fw-bold">{smoothie.title}</h1>
        <p className="mb-4">{smoothie.description}</p>
        <h4>{smoothie.size ? smoothie.size.price + "€" : "À partir de 7€"}</h4>
        {bIngredients ? (
          <AllergeneCard ingredients={smoothie.ingredients} />
        ) : null}
        <Link to={`/personnaliser`} className="btn btn-primary text-white">
          Commander
        </Link>
      </div>
      <div className="product-device d-none d-md-block col-4">
        <SmoothieIcon color={smoothie.color} />
      </div>
    </>
  );
};

export default SmoothieCard;
