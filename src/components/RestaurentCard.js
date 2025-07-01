import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";
export const RestaurentCard = (props) => {
  const { resData } = props;

  console.log(resData);

  const { name, cuisines, avgRating, sla, locality } = resData?.info;

  return (    
      <div className="w-[280] p-4 bg-yellow-50 border border-black-50 rounded-2xl hover:border-4 my-7">
        <img
          className="w-60 h-80 rounded-2xl"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
        <h2 className="font-bold py-2 text-lg">{name}</h2>
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
