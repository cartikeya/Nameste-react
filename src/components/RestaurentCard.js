import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";
export const RestaurentCard = (props) => {
  const { resData } = props;

  console.log(resData);

  const { name, cuisines, avgRating, sla, locality } = resData?.info;

  return (
    
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating} Stars</h5>
        <h4>{locality}</h4>
        <h5>
          {sla.deliveryTime} to {sla.deliveryTime + 5} minutes
        </h5>
      </div>
  );
};

export default RestaurentCard;
