import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handelClick = () => {
    setShowItems(!showItems);
  };
  // const categoriesArray = data?.categories.map((ca) => ca.itemCards)
  //   ? data?.categories.map((ca) => ca.itemCards)
  //   : [];

  // const DDD = categoriesArray.card;

  // console.log(DDD);

  // console.log(categoriesArray);

  return (
    <div>
      <div className="w-6/12 mx-auto my-3 bg-white shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handelClick}
        >
          <span className="font-bold text-lg">
            {data?.title}({data?.itemCards?.length})
          </span>
          <span>▽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
