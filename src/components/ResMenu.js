import { useEffect, useState } from "react";
import { useParams } from "react-router";
const ResMenu = (props) => {
  const [resInfo, setresInfo] = useState();

  const { resID } = useParams();
  console.log(resID);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6868159&lng=83.2184815&restaurantId=" +
        resID +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
    //cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    //.itemCards
    console.log("setresinfo", resInfo);
    const items =
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;
    console.log(items);
    console.log(json?.data?.cards);
  };

  //   const { resData } = props;
  //   console.log(resData);
  //   const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(resInfo);
  //   console.log(itemCards);
  return (
    <div className="menu">
      <h2>{resInfo?.cards[2]?.card?.card?.info?.name}</h2>
      <h1>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h1>
      <h1>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h1>
      <h2>crispy burger - price - cuisines</h2>
      <h3>Menu</h3>
      <ul>
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
          (item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ResMenu;
