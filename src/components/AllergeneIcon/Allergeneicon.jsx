import style from "./AllergeneIcon.module.scss";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const AllergeneIcon = (props) => {
  const { name, title } = props;
  const url = require(`../../images/icon/allergene/${name}`);
  
  const tooltip = (
    <Tooltip id="button-tooltip">
     {title}
    </Tooltip>
  );

  return (
    <>
      <OverlayTrigger placement="top" overlay={tooltip}>
          <li className="me-3">
            <div className={style.allergene}>
              <img src={url} alt={title} />
            </div>
          </li>
      </OverlayTrigger>
    </>
  );
};

export default AllergeneIcon;
