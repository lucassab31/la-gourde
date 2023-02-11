import { Link } from "react-router-dom";
import img404 from "../../images/404.svg";
import { ArrowRight } from "react-bootstrap-icons";

const ErrorPage = () => {
  return (
    <>
      <main className="container">
        <img src={img404} className="img-fluid my-4" alt="404 image" />
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-center text-primary">
              Vous avez dû vous égarer
            </h1>
            <p className="card-text text-center">Retrouver le droit chemin</p>
            <p className="card-text text-center">
              <Link to="/" className="btn btn-dark">
                Par ici <ArrowRight />
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
