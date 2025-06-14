import React from "react";
import { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.30070&lng=80.46390&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await Data.json();

    console.log(json);
    const restaurantCards = json.data.cards.filter(
       (card) => card?.card?.card?.info
    );
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
            console.log("button clicked");
            let filteredList = ListofRestaurants.filter(
              (res) => res.card.card.info.avgRating >= 4.0
            );
            setListofRestaurants(filteredList);
            // console.log(ListofRestaurants)
          }}
        >
          click to filter
        </button>
      </div>
      <div className="res-container">
        {fil.map((restaurent, index) => (
          <RestaurentCard
            key={restaurent?.card?.card?.info?.id}
            resData={restaurent}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
