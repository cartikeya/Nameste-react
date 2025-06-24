import { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import { RES_API } from "../utils/constants";
import useOnlinestatus from "../utils/useOnlinestatus";

const Body = () => {
  const [ListofRestaurants, setListofRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const onlinestatus = useOnlinestatus();
  const [fil, setfil] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch(RES_API);
    const json = await Data.json();

    console.log(json);

    const restaurantCards =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    // const restaurantCards = json.data.cards.filter(
    //   (card) => card?.card?.card?.info
    // );
    console.log(restaurantCards);
    setListofRestaurants(restaurantCards);
    setfil(restaurantCards);
  };
  if (ListofRestaurants.length === 0) {
    return <Shimmer />;
  }
  if (onlinestatus === false) {
    return <h1>check your connection</h1>;
  }
  return (
    <div className="body">
      <div className="p-4 m-4 flex">
        <input
          type="text"
          className="px-4 py-2 bg-pink-50 m-4 border border-black rounded-lg "
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 bg-blue-400 m-4 rounded-xl cursor-pointer"
          onClick={() => {
            let filter = ListofRestaurants.filter((res) =>
              res.card?.card?.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setfil(filter);
          }}
        >
          search
        </button>
        <div className="filter">
          <button
            className="click-btn"
            onClick={() => {
              // console.log("button clicked");
              let filteredList = ListofRestaurants.filter(
                (res1) => res1.card.card.info.avgRating > 4.0
              );
              setListofRestaurants(filteredList);
              console.log(filteredList);
              console.log(ListofRestaurants);
            }}
          >
            click to filter
          </button>
        </div>
      </div>
      <div className="res-container">
        {fil.map((restaurant, index) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurentCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
    // <Shimmer />
  );
};

export default Body;
