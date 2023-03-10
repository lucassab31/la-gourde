import AllergeneIcon from "components/AllergeneIcon/Allergeneicon";

const AllergeneCard = (props) => {
  const { ingredients } = props;
  return (
    <>
      <ul className="d-flex list-unstyled tw-flex-wrap tw-gap-3">
        {ingredients.map((ingredient) => (
          <AllergeneIcon
            key={ingredient.id}
            name={ingredient.allergens[0].icon}
            title={ingredient.allergens[0].name}
          />
        ))}
      </ul>
    </>
  );
};

export default AllergeneCard;
