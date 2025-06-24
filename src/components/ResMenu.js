import { useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResMenu = (props) => {
  const [showMenu, setshowMenu] = useState(false);

  const { resID } = useParams();
  console.log(resID);

  const resInfo = useRestaurantMenu(resID);
  if (!resInfo) return <h1>Loading menu...</h1>;
  console.log(resInfo);
  const {name, costForTwoMessage,cuisines} = resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      <h2>{name}</h2>
      <h1>{costForTwoMessage}</h1>
      <h1>{cuisines.join(", ")}</h1>

      <h3
        onClick={() => {
          setshowMenu(!showMenu);
        }}
      >
        {showMenu ? "🔽" : "▶️"}
        {
          resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card?.title
        }
      </h3>

      {showMenu ? (
        <ul>
          {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} - Rs.{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </li>
            )
          )}
        </ul>
      ) : null}

      <h3>
        {
          resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
            ?.card?.title
        }
      </h3>
  
      <ul>
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.map(
          (item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          )
        )}
      </ul>

      <h3>
        {
          resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
            ?.card?.title
        }
      </h3>
      <ul>
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards?.map(
          (item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          )
        )}
      </ul>

      <h3>
        {
          resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
            ?.card?.title
        }
      </h3>
      <ul>
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards?.map(
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
