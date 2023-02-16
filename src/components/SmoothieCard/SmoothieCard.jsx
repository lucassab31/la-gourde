import SmoothieIcon from "components/SmoothieIcon/SmoothieIcon";
import Button from "components/Button/Button";
import AllergeneCard from "components/AllergeneCard/AllergeneCard";
import style from "./SmoothieCard.module.scss";
import { Link } from "react-router-dom";

const SmoothieCard = ({ smoothie }) => {
  let bIngredients = true;
  if (smoothie.ingredients.length == 0) {
    bIngredients = false;
  }
  const color = smoothie.color;
  const newColor = newShadeOpacity(color, 0.3);
  return (
    <div className="col-4">
      <div
        className="card card-cover h-100 overflow-hidden bg-white rounded-4"
        style={{ backgroundColor: smoothie.color, borderColor: smoothie.color }}
      >
        <div
          className="d-flex flex-column h-100 m-3 p-5 rounded-4 "
          style={{ backgroundColor: newColor }}
        >
          <div className={style.smoothieIcon}>
            <SmoothieIcon color={smoothie.color} />
          </div>
          <h3 className="pt-5  mb-4 display-6 lh-1 fw-bold">
            {smoothie.title}
          </h3>
          <p className="mb-4">{smoothie.description}</p>
          <h4>
            {smoothie.size ? smoothie.size[0].price + "€" : "À partir de 7€"}
          </h4>
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
      </div>
    </div>
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
