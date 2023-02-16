import SmoothieIcon from "components/SmoothieIcon/SmoothieIcon";
import Button from "components/Button/Button";
import AllergeneCard from "components/AllergeneCard/AllergeneCard";
import style from "./SmoothieCardCreate.module.scss";
import { Link } from "react-router-dom";

const SmoothieCard = ({ smoothie }) => {
  let bIngredients = true;
  if (smoothie.ingredients.length == 0) {
    bIngredients = false;
  }
  const color = smoothie.color;
  const newColor = newShadeOpacity(color, 0.3);
  return (
    <>
      <div className="col-md-6 p-lg-5 mx-5 my-5 text-white">
        <h1 className="mb-4 display-6 lh-1 fw-bold">{smoothie.title}</h1>
        <p className="mb-4">{smoothie.description}</p>
        <h4>{smoothie.size ? smoothie.size.price + "€" : "À partir de 7€"}</h4>
        {bIngredients ? (
          <AllergeneCard ingredients={smoothie.ingredients} />
        ) : null}
        <Link
          to={`/smoothie/${smoothie.id}`}
          className="btn btn-primary text-white"
        >
          Commander
        </Link>
      </div>
      <div className="product-device d-none d-md-block col-4">
        <SmoothieIcon color={smoothie.color} />
      </div>
    </>
  );
};

const newShadeOpacity = (hex, magnitude) => {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      ", " +
      magnitude +
      ")"
    );
  }
  throw new Error("Bad Hex");
};

export default SmoothieCard;
