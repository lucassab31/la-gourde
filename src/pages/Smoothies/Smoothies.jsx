import SmoothieCard from 'components/SmoothieCard/SmoothieCard';
import SmoothieCardCreate from 'components/SmoothieCardCreate/SmoothieCardCreate';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { getSmoothies } from 'services/smoothies.product';

export const smoothiesLoader = async () => {
    const smoothies = await getSmoothies();
    return smoothies;
}

const Smoothies = ()  => {
    const products = useLoaderData();
    const product1 = products[0];
    return (
        <section>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Liste des Smoothies</h2>
                <h3>Smoothies à faire</h3>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <SmoothieCardCreate key={product1.id} smoothie={product1}  />
                </div>
                <h3>Nos smoothies</h3>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {products.map((product) => (
                      product.id > 1 ? <SmoothieCard key={product.id} smoothie={product}  /> : ""
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Smoothies;