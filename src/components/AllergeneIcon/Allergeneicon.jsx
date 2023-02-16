import style from "./AllergeneIcon.module.scss";

const AllergeneIcon = (props) => {
  const { name, title } = props;
  const url = require(`../../images/icon/allergene/${name}`);
  return (
    <>
      <li>
        <div className={style.allergene}>
          <img src={url} alt={title} />
        </div>
      </li>
    </>
  );
};

export default AllergeneIcon;
