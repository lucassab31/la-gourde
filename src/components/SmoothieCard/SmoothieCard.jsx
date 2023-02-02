import SmoothieIcon from "components/SmoothieIcon/SmoothieIcon";
import style from "./SmoothieCard.module.scss";

const SmoothieCard = ({ smoothie }) => {
    return (
        <div className={style.smoothieCard}>
            <div className={style.smoothieIcon}>
                <SmoothieIcon color="#ff9000" />
            </div>
            <p className={style.smoothieCardTitle}>Nom smoothie</p>
            <p className={style.smoothieCardPrice}>15,50€</p>
        </div>
    )
}

export default SmoothieCard;