import {Link} from "react-router-dom";
import img404 from "../../images/404.svg";

const ErrorPage = () => {
    return (
        <>
            <img src={img404} className="img-fluid my-4" alt="404 image" />
            <main className="container">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title text-center text-primary">Vous avez du vous égarer</h1>
                        <p className="card-text text-center">Retrouver le droit chemin</p>
                        <p className="card-text text-center"><Link to="/" className="btn btn-dark">Par ici <i class="bi bi-arrow-right"></i></Link></p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ErrorPage;