import SmoothieCard from "components/SmoothieCard/SmoothieCard";
import { useStore } from "contexts/store.context";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const Home = observer(() => {
  const {products: {products,loadSmoothies}} = useStore()

  useEffect(()=>{
    loadSmoothies();
  }, [])

  return (
    <>
        <section className="hero_banner">
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-normal">Punny headline</h1>
                <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                <a className="btn btn-outline-secondary" href="#">Coming soon</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </section>
        <section className="top_sell">
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Top des ventes</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {products.map((product) => (
                      <SmoothieCard key={product.id} smoothie={product} />
                    ))}
                </div>
            </div>
      </section>
    </>
  );
});

export default Home;
