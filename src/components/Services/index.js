import { NavLink} from "react-router-dom";
const Services = ({ name, img, path }) => {
  return (
    <div className="col-md-6 col-12 category-img">
      <NavLink to={path}>
        <div className="phovv">
          <img className="w-100 hovv" src={img} />
          <h3 className="img-text">{name}</h3>
          <p className="img-desc sec-section-text"></p>
        </div>
      </NavLink>
    </div>
  );
};
export default Services;
