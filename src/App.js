import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
