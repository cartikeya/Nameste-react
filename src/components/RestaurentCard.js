import { CDN_URL } from "../utils/constants";

export const RestaurentCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, sla } = resData?.card?.card?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + resData.card.card.info.cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} Stars</h5>
      <h5>
        {sla.deliveryTime} to {sla.deliveryTime + 5} minutes
      </h5>
    </div>
  );
};

export default RestaurentCard;
