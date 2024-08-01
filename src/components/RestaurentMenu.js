import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../Utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    sla,
    totalRatingsString,
    areaName,
  } = resInfo.cards[2].card.card.info;

  const { itemCardsMenu } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"].includes(
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) ||
        c.card?.card?.["@type"].includes(
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        )
    );

  console.log(categories);

  return (
    <div className="text-center">
      <div className="w-[50%] text-start ms-80">
        <h1 className="font-bold  m-5 text-3xl overflow-hidden overflow-ellipsis">
          {name}
        </h1>
        <div className="border border-solid border-white w-[100%] pb-5 mx-auto rounded-2xl shadow-xl mb-5">
          <span>
            <h3 className="font-semibold text-rose-600  m-5 mb-1 text-xl ">
              Order Online
            </h3>
            <div className="h-[2px]  bg-slate-200 mx-auto"></div>
            <svg
              width="25"
              height="25"
              viewBox="0 0 20 20"
              fill="green"
              role="img"
              aria-hidden="true"
              stroke-color="rgba(2, 6, 12, 0.92)"
              className="ms-[36px] mt-4"
            >
              <circle cx="10" cy="10" r="9" fill="green"></circle>
              <path
                d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                fill="white"
              ></path>
            </svg>
            <p className="-mt-7 ms-16 font-semibold text-lg ">
              {avgRating}
              <p className="text-base inline-block">
                ({totalRatingsString})
              </p> - {costForTwoMessage}
            </p>
          </span>
          <p className="m-1 ms-12 font-semibold text-base underline text-orange-600">
            {cuisines.join(", ")}
          </p>
          <p className=" m-1 ms-14 font-semibold text-base">
            • Outlet <p className="inline-block font-light">{" " + areaName}</p>
          </p>
          <p className=" m-1 ms-14 font-semibold text-base ">
            • {sla?.slaString}
          </p>
        </div>
      </div>
      {/** categories accordions */}
      <div>
        {categories.map((category, index) => (
          <RestaurentCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;
