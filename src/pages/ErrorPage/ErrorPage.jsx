import { useRouteLoaderData } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteLoaderData();
  return (
    <div>
      <h1>Erreur</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
