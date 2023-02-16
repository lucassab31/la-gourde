import SmoothieCard from 'components/SmoothieCard/SmoothieCard';
import SmoothieCardCreate from 'components/SmoothieCardCreate/SmoothieCardCreate';
import Button from 'components/Button/Button';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useStore } from 'contexts/store.context';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

const Smoothies = observer(()  => {

    const {products: {products, loadSmoothies, loadSmoothiesByIngredient, productsIngred, loadSmoothieOne, productOne}} = useStore();
    const {ingredients: {ingredients, loadIngredients}} = useStore();
    const {allergens: {allergens, loadAllergens}} = useStore();

    useEffect(() => {
        loadSmoothies();
        loadSmoothieOne(1);
        loadIngredients();
        loadAllergens();
    },[loadSmoothies, loadSmoothieOne,loadIngredients,loadAllergens ]);

    let productsList = toJS(products);
    let ingredientsList = toJS(ingredients);
    let allergensList = toJS(allergens);

    const filterByIngredients = (event) => {
        let value = event.target.value;
        const btnReset = document.getElementById('reset_filter');
        if (value === "all") {
            loadSmoothies();
            btnReset.style.display = "none";
        } else {
            btnReset.style.display = "block";
            loadSmoothiesByIngredient(value);
        }  
    }

    const resetFilter = () => {
        const select = document.getElementById('ingredients');
        const btnReset = document.getElementById('reset_filter');
        select.value = "all";
        btnReset.style.display = "none";
        loadSmoothies();
    }

    return (
        <section>
            <div className="container px-0" id="custom-cards">
                <h2 className="pb-2 border-bottom">Liste des Smoothies</h2>
                <h3>Smoothies à faire</h3>
                <div className="position-relative overflow-hidden p-3 p-md-5 my-4 bg-secondary rounded-4">
                    { productOne ? <SmoothieCardCreate key={productOne.id} smoothie={productOne}  /> : null }
                </div>
                <h3>Nos smoothies</h3>
                <div className='row'>
                    {/* Filter */}
                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="form-group">
                            <label htmlFor="ingredients">Filtrer par ingrédients</label>
                            <div className='d-flex align-items-center'>
                               
                                <select className="form-control" id="ingredients" onChange={filterByIngredients}>
                                    <option value="all">Tous</option>
                                    {ingredientsList.map((element) => (
                                        <option key={element.id} value={element.id}>{element.name}</option>
                                    ))}
                                </select>
                                <button id='reset_filter' className='btn btn-primary text-white fw-bold ms-2' onClick={resetFilter}>Reset</button>
                            </div>
                            
                        </div>
                    </div>

                    {/* Sort / Allergene
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                            <label htmlFor="allergens">Filtrer par allergènes</label>
                            <select className="form-control" id="allergens">
                                <option value="all">Tous</option>
                                {allergensList.map((element) => (
                                    <option key={element.id} value={element.id}>{element.name}</option>
                                ))}
                            </select>
                        </div>
                    </div> */}
                </div>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {productsList.map((product) => (
                      product.id > 1 ? <SmoothieCard key={product.id} smoothie={product} /> : ""
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Smoothies;