import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const BackButton = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <button onClick={goBack} className="btn btn-secondary">
            <ArrowLeft />
        </button>
    )
}

export default BackButton;