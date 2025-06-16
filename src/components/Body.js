import React from "react";
import { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import { Link } from "react-router";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListofRestaurants, setListofRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [fil, setfil] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6868159&lng=83.2184815&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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
  return (
    <div className="body">
      <div className="search-div">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
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
      </div>
      <div className="search">
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
  );
};

export default Body;
