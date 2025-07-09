
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatogory from "./RestaurantCategory";

const ResMenu = (props) => {
  // const [showMenu, setshowMenu] = useState(false);

  const { resID } = useParams();
  console.log(resID);

  const resInfo = useRestaurantMenu(resID);
  if (!resInfo) return <h1>Loading menu...</h1>;
  // console.log(resInfo);
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  console.log(resInfo);

  const catogories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(catogories);

  return (
    <div className="text-center">
      <h2 className="font-bold my-10 text-4xl">{name}</h2>
      <h1>{costForTwoMessage}</h1>
      <h1>{cuisines.join(", ")}</h1>
      {catogories.map((catogory) => <RestaurantCatogory catogory={catogory}/>)}
    </div>
  );
};

export default ResMenu;
