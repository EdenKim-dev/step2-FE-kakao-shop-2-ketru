import { Link } from "react-router-dom"

const staticServerUri = process.env.REACT_APP_PATH||"";

const Card  = ({ to, children }) => {
  return (
      <Link className="card" to={staticServerUri + to}>
        {children}
      </Link>
  );
};

export default Card;