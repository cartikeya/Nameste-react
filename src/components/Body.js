import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <p>search </p>
      </div>
      <div className="res-container">
        {resList.map((restaurent, index) => (
          <RestaurentCard
            key={restaurent.card.card.info.id}
            resData={restaurent}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
