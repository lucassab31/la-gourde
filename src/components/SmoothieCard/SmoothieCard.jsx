import SmoothieIcon from "components/SmoothieIcon/SmoothieIcon";
import AllergeneCard from "components/AllergeneCard/AllergeneCard";
import style from "./SmoothieCard.module.scss";
import { Link } from "react-router-dom";

const SmoothieCard = ({ smoothie }) => {
  let bIngredients = true;
  if (smoothie.ingredients.length === 0) {
    bIngredients = false;
  }
  const color = smoothie.color;
  const newColor = newShadeOpacity(color, 0.3);
  return (
    <div className="tw-w-full">
      <div
        className="card card-cover h-100 overflow-hidden bg-white rounded-4"
        style={{ backgroundColor: smoothie.color, borderColor: smoothie.color }}
      >
        <div
          className="d-flex flex-column h-100 m-2 tw-py-5 tw-px-8 rounded-3 "
          style={{ backgroundColor: newColor }}
        >
          <div
            className={`${style.smoothieIcon} tw-flex tw-justify-center tw-w-full`}
          >
            <SmoothieIcon className="tw-w-3/5" color={smoothie.color} />
          </div>
          <h3 className="pt-5  mb-4 display-6 lh-1 fw-bold">
            {smoothie.title}
          </h3>
          <p className="mb-2">{smoothie.description}</p>
          <h4>
            {smoothie.size ? smoothie.size.price + "€" : "À partir de 4€"}
          </h4>
          <div className="tw-mt-auto tw-pt-5">
            {bIngredients ? (
              <AllergeneCard ingredients={smoothie.ingredients} />
            ) : null}
            {smoothie.id === 0 ? (
              <Link
                to={`/personnaliser`}
                className="btn btn-primary text-white"
              >
                Commander
              </Link>
            ) : (
              <Link
                to={`/smoothie/${smoothie.id}`}
                className="btn btn-primary text-white"
              >
                Commander
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const newShadeOpacity = (hex, magnitude) => {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
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
