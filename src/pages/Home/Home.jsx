import SmoothieCard from "components/SmoothieCard/SmoothieCard";
import { useStore } from "contexts/store.context";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toJS } from "mobx";
import SmoothieIcon from "components/SmoothieIcon/SmoothieIcon";

const Home = observer(() => {
  const {products: {products, loadSmoothies}} = useStore();

    useEffect(() => {
      loadSmoothies();
    }, [loadSmoothies]);

  let productsList = toJS(products);
  let product1 = productsList[1];
  let productsListBestSeller = productsList.slice(1, 4);
  
  return (
    <>
        <section className="hero_banner">
            <div className="position-relative overflow-hidden p-3 p-md-5 bg-secondary rounded-4">
                <div className="col-md-6 p-lg-5 mx-5 my-5 text-white">
                  <span>Vedette</span>
                  <h1 className="display-4 fw-bold">{product1.title}</h1>
                  <p className="lead fw-normal">{product1.description}</p>
                  <Link to={`/smoothie/${product1.id}`} className="btn btn-primary text-white fw-bold">Commander</Link>
                </div>
                <div className="product-device d-none d-md-block col-4">
                  <SmoothieIcon color={product1.color} />
                </div>
            </div>
        </section>
        <section className="top_sell">
            <div className="container py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Top des ventes</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {productsListBestSeller.map((product) => (
                      <SmoothieCard key={product.id} smoothie={product} />
                    ))}
                </div>
            </div>
        </section>
    </>
  );
});

export default Home;
