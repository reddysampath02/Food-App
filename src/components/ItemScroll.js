import { IMG_URL } from "../Utils/constants";
import { useRef } from "react";

const ItemScroll = (itemsData) => {
  const itemScrollData = itemsData?.scrollBarData;
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef?.current;

    if (container) {
      const scrollAmount = 1200;

      if (direction === "left") {
        container.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="mt-5">
      <div className="flex w-[80%] mx-auto  justify-between">
        <p className="font-bold text-2xl">What's On Your Mind ?</p>
        <div className="flex">
          <span>
            <button
              className="flex items-center space-x-2 px-2 py-2 rounded-full bg-slate-300 mr-2 "
              onClick={() => handleScroll("left")}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H6M12 5l-7 7 7 7"
                ></path>
              </svg>
            </button>
          </span>
          <span>
            <button
              className="flex items-center space-x-2 px-2 py-2 rounded-full bg-slate-300 "
              onClick={() => handleScroll("right")}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </span>
        </div>
      </div>
      <div
        className="flex mx-auto h-[200px] w-[80%] overflow-x-auto [&::-webkit-scrollbar]:hidden transition duration-700 ease-in-out "
        ref={scrollContainerRef}
      >
        {itemScrollData.map((item, index) => (
          <img
            key={item.imageId}
            src={IMG_URL + item.imageId}
            className="w-[470px] h-full mx-3 cursor-pointer"
            alt={`Cuisine ${item.imageId}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemScroll;
