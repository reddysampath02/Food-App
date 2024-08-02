import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constants";
import { addItem } from "../Utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handelAddItem = (item) => {
    //Dispatch on action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="block font-bold text-[18px]">
                {item?.card?.info?.name}
              </span>
              <span className="mr-1 font-semibold">
                ₹ {item?.card?.info?.price / 100}
              </span>
              <span className="block text-green-500 font-bold my-2">
                {item?.card?.info?.ratings?.aggregatedRating?.rating
                  ? "⭐" + item?.card?.info?.ratings?.aggregatedRating?.rating
                  : ""}
                <p className="inline-block text-black font-semibold ml-1">
                  {" "}
                  {item?.card?.info?.ratings?.aggregatedRating
                    ?.ratingCountV2 ? (
                    <p>
                      (
                      {
                        item?.card?.info?.ratings?.aggregatedRating
                          ?.ratingCountV2
                      }
                      )
                    </p>
                  ) : (
                    ""
                  )}
                </p>
              </span>
            </div>
            <p className="text-xs ">{item?.card?.info?.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="px-4 p-0.5 mx-4 my-[88px] bg-white text-green-500 font-bold shadow-lg rounded-lg  hover:text-orange-600"
                onClick={() => handelAddItem(item)}
              >
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-[100px] h-[100px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
