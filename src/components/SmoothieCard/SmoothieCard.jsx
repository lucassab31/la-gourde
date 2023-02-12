import SmoothieIcon from "components/SmoothieIcon/SmoothieIcon";
import Button from "components/Button/Button";
import AllergeneIcon from "components/AllergeneIcon/Allergeneicon";
import style from "./SmoothieCard.module.scss";
import { Link } from "react-router-dom";

const SmoothieCard = ({ smoothie }) => {

    return (
        <div className="col-4">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <SmoothieIcon color={smoothie.color} />
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{smoothie.title}</h3>
                    <h4>{smoothie.size.price}</h4>
                    <ul className="d-flex list-unstyled mt-auto">
                        <li className="me-auto">
                            <AllergeneIcon name="pip.svg" title="Allergene graine" />
                        </li>
                    </ul>
                    <Link to={`/smoothie/${smoothie.id}`}>Commander</Link>
                </div>
            </div>
        </div>
    )
}

export default SmoothieCard;