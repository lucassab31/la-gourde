import { useStore } from "contexts/store.context";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import SmoothieIcon from "components/SmoothieIcon/SmoothieIcon";
import { v4 as uuidv4 } from "uuid";

const Personalizer = observer(() => {
  const {
    sizes: { sizes, loadSizes },
    ingredients: { ingredients, loadIngredients },
    sizeChosen: { sizeChosen, setSizeChosen, resetSizeChosen },
    ingredientsCustom: {
      ingredientsCustom,
      setMaxIngredients,
      addIngredient,
      isIncluded,
      resetIngredientsCustom,
      removeIngredient,
    },
    cart: { addToCart },
  } = useStore();

  let sizeChosenObj = toJS(sizeChosen);
  let sizesList = toJS(sizes);
  let ingredientsCustomList = toJS(ingredientsCustom);
  let ingredientsList = toJS(ingredients);

  const checkSizes = () => {
    document.querySelectorAll("fieldset#sizes input")?.forEach((size) => {
      size.checked = size.id.includes(sizeChosenObj?.id.toString()) | false;
    });
  };
  checkSizes();

  const checkIngredients = () => {
    document
      .querySelectorAll("fieldset#ingredients input")
      ?.forEach((ingredient) => {
        ingredient.checked = isIncluded(
          Number(ingredient?.id.replace("ingredient-", ""))
        );
      });
  };
  checkIngredients();

  useEffect(() => {
    loadSizes();
    loadIngredients();
  }, [loadSizes, loadIngredients]);

  return (
    <div className="tw-container tw-mx-auto tw-grid tw-gap-8 md:tw-grid-cols-2">
      <div>
        <SmoothieIcon
          className="tw-max-h-64 md:tw-max-h-[450px] md:tw-sticky md:tw-top-28 md:tw-mt-16"
          color={"#ff8b8b"}
        />
      </div>
      <div>
        <h1 className="tw-w-full tw-text-center tw-text-[#ff8b8b] tw-font-extrabold tw-text-5xl tw-mb-6">
          Customisez
        </h1>
        <form
          className="tw-grid tw-gap-5 tw-h-max"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset id="sizes">
            <div className="tw-flex tw-justify-between">
              <legend>Choisir une taille :</legend>
              <button
                className="tw-text-blue tw-text-sm"
                onClick={() => {
                  sizeChosenObj = null;
                  resetSizeChosen();
                  resetIngredientsCustom();
                  checkSizes();
                }}
              >
                Reset
              </button>
            </div>
            {sizesList?.map((size) => {
              if (size.show) {
                return (
                  <div
                    key={`size-${size.id}`}
                    className="tw-flex tw-gap-2 tw-items-center"
                  >
                    <input
                      type="radio"
                      name="size"
                      id={`size-${size.id}`}
                      onClick={() => {
                        if (!sizeChosenObj || sizeChosenObj.id !== size.id) {
                          checkSizes();
                          resetIngredientsCustom();
                          setSizeChosen(size);
                          setMaxIngredients(size.maxIngredients);
                        }
                      }}
                    />
                    <label htmlFor={`size-${size.id}`}>
                      {size.name} <small>({`${size.price}€`})</small>
                    </label>
                  </div>
                );
              }
              return null;
            })}
          </fieldset>

          <fieldset
            id="ingredients"
            className={sizeChosen === null ? " tw-opacity-50" : ""}
          >
            <div className="tw-flex tw-justify-between">
              <legend>
                Choisir vos ingrédients ({ingredientsCustomList?.length | 0} /
                {sizeChosen === null ? " ?" : ` ${sizeChosen?.maxIngredients}`})
                :
              </legend>
              <button
                className="tw-text-blue tw-text-sm"
                onClick={() => {
                  checkIngredients();
                  resetIngredientsCustom();
                }}
              >
                Reset
              </button>
            </div>
            {ingredientsList?.map((ingredient) => {
              if (ingredient.isAvailable) {
                return (
                  <div
                    key={`ingredient-${ingredient.id}`}
                    className={`tw-flex tw-gap-2${
                      !sizeChosenObj
                        ? " tw-opacity-50"
                        : sizeChosenObj?.maxIngredients ===
                            ingredientsCustomList.length &&
                          !isIncluded(ingredient)
                        ? " tw-opacity-50"
                        : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="ingredient"
                      id={`ingredient-${ingredient.id}`}
                      disabled={
                        !sizeChosenObj
                          ? true
                          : sizeChosenObj?.maxIngredients ===
                              ingredientsCustomList.length &&
                            !isIncluded(ingredient)
                          ? true
                          : false
                      }
                      onClick={() => {
                        if (!isIncluded(ingredient)) {
                          addIngredient(ingredient);
                          checkIngredients();
                        } else {
                          removeIngredient(ingredient);
                        }
                      }}
                    />
                    <label htmlFor={`ingredient-${ingredient.id}`}>
                      {ingredient.name}
                    </label>
                  </div>
                );
              }
              return null;
            })}
          </fieldset>
          <button
            className="btn btn-primary !tw-text-white"
            type="submit"
            disabled={
              sizeChosenObj?.maxIngredients !== ingredientsCustomList?.length
            }
            onClick={() => {
              const custom = {
                id: Number(uuidv4().replace(/[^0-9]/gm, "")),
                title: "Smoothie personnalisé",
                description: "Votre création",
                ingredients: ingredientsCustomList,
                size: sizeChosenObj,
                color: "#ff8b8b",
                quantity: 1,
              };
              addToCart(custom);
              resetIngredientsCustom();
              resetSizeChosen();
              window.location.assign(
                `${window.location.href.replace(
                  window.location.pathname,
                  "/panier"
                )}`
              );
            }}
          >
            Ajouter au panier
          </button>
        </form>
      </div>
    </div>
  );
});

export default Personalizer;
