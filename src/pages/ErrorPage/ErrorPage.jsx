import { Link } from "react-router-dom";
import img404 from "../../images/404.svg";
import { ArrowRight } from "react-bootstrap-icons";

const ErrorPage = () => {
  return (
    <>
      <main className="container">
        <img src={img404} className="img-fluid my-4 mx-auto" alt="404" />
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-center text-primary">
              Vous avez dû vous égarer
            </h1>
            <p className="card-text text-center">Retrouver le droit chemin</p>
            <p className="card-text text-center">
              <Link to="/" className="btn btn-dark w-25 d-flex justify-content-evenly align-items-center mx-auto">
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
