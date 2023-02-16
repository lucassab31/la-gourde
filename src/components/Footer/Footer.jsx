import Nav from "../Nav/Nav";

const Footer = () => {
  return (
    <footer className="py-3 my-4 border-top border-primary">
      <ul className="nav d-flex justify-content-center border-bottom pb-3 mb-3 gap20">
        <Nav strClass="nav-item d-flex align-items-center" style={{gap:'10px'}} />
      </ul>
      <p className="text-center text-muted">&copy; 2023 La Gourde</p>
    </footer>
  );
};

export default Footer;
