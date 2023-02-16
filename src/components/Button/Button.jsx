const Button = (props) => {
  const {
    title,
    callback,
    styleClass = "btn btn-primary text-white fw-bold",
  } = props;
  return (
    <button onClick={callback} className={styleClass}>
      {title}
    </button>
  );
};

export default Button;
