import { MENU_API } from "./constants";

import { useEffect, useState } from "react";
const useRestaurantMenu = (resID) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resID + "&catalog_qa=undefined&submitAction=ENTER"
    );
    console.log(resID);
    const json = await data.json();
    console.log("API response JSON:", json);
    setresInfo(json.data);
    //cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    //.itemCards
    console.log("setresinfo", json);
    // const items =
    //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards;
    // console.log(items);
    // console.log(json?.data?.cards);
  };

  return resInfo;
};

export default useRestaurantMenu;

//   const { resData } = props;
//   console.log(resData);
//   const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

//   console.log(itemCards);
