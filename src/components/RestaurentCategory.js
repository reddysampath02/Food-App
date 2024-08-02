import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  const renderItems = () => {
    if (data?.categories && data.categories.length > 0) {
      return data.categories.map((category, index) => (
        <ItemList key={index} items={category.itemCards} />
      ));
    } else {
      return <ItemList items={data.itemCards} />;
    }
  };

  const cardsLength = () => {
    if (data?.categories && data.categories.length > 0) {
      return data.categories.reduce(
        (total, category) => total + category.itemCards.length,
        0
      );
    } else {
      return data.itemCards?.length || 0;
    }
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-3 bg-white shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({cardsLength()})
          </span>
          <span>{showItems ? "▲" : "▽"}</span>
        </div>
        {showItems && renderItems()}
      </div>
    </div>
  );
};

export default RestaurantCategory;
