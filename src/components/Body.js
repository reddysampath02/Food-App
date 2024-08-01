import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import ItemScroll from "./ItemScroll";
import Footer from "./Footer";

const Body = () => {
  const [listOfRestro, setlistOfRestro] = useState([]);
  const [listOfFilterRestro, setListOfFilterRestro] = useState([]);
  const [itemScrollData, setItemScrollData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [title, setTitle] = useState("");

  console.log(listOfRestro);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setlistOfRestro(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json.data);

    setListOfFilterRestro(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setTitle(json?.data?.cards[2]?.card?.card?.title);

    setItemScrollData(json.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };
  const onlineStatus = useOnlineStatus();

  // console.log(itemScrollData);

  if (onlineStatus === false)
    return <h1>You are offline!!! Please check your internet Connection</h1>;

  // conditional rendering
  return listOfRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <ItemScroll scrollBarData={itemScrollData} />
        <div className="h-[2px] w-[80%] bg-slate-200 mx-auto mt-10"></div>
      </div>
      <div className="font-bold text-2xl mt-6 w-[80%] mx-auto">{title}</div>

      <div className="flex m-5 items-start w-[80%] mx-auto flex-wrap">
        <div className="search">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black m-1 mr-0 p-1"
            value={searchText}
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4  border-black border-[1px] ms-0 py-1 font-semibold  hover:text-orange-500  hover:border-orange-500"
            onClick={() => {
              const filterRestro = listOfRestro.filter((res) =>
                res.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );

              setListOfFilterRestro(filterRestro);
              console.log(filterRestro);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-4  border-black border-[1px] rounded-full py-1 ml-3 my-1 font-semibold  hover:text-orange-500  hover:border-orange-500"
          onClick={() => {
            const filterList = listOfRestro;
            setListOfFilterRestro(filterList);
          }}
        >
          No Filter
        </button>

        <button
          className="px-4  border-black border-[1px] rounded-full py-1 ml-3 my-1 font-semibold  hover:text-orange-500  hover:border-orange-500"
          onClick={() => {
            let filterList = listOfRestro.filter(
              (res) => res.info.sla.lastMileTravel < 2.0
            );
            setListOfFilterRestro(filterList);
          }}
        >
          Fast Delivery
        </button>

        <button
          className="px-4  border-black border-[1px] rounded-full py-1 ml-3 my-1 font-semibold  hover:text-orange-500  hover:border-orange-500"
          onClick={() => {
            let filterList = listOfRestro.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfFilterRestro(filterList);
          }}
        >
          Rating 4.5+
        </button>

        <button
          className="px-4  border-black border-[1px] rounded-full py-1 ml-3 my-1 font-semibold  hover:text-orange-500  hover:border-orange-500"
          onClick={() => {
            let filterList = listOfRestro.filter(
              (res) => parseInt(res.info.costForTwo.substring(1, 4)) < 300
            );
            setListOfFilterRestro(filterList);
          }}
        >
          Less then Rs.300
        </button>
        <button
          className="px-4  border-black border-[1px] rounded-full py-1 ml-3 my-1 font-semibold  hover:text-orange-500  hover:border-orange-500"
          onClick={() => {
            let filterList = listOfRestro.filter(
              (res) => parseInt(res.info.costForTwo.substring(1, 4)) >= 250
            );
            setListOfFilterRestro(filterList);
          }}
        >
          Above Rs.250
        </button>
      </div>
      <div className="flex flex-wrap mx-auto ms-6 justify-start">
        {listOfFilterRestro.map((restaurants) => (
          <Link
            to={"/restaurents/" + restaurants.info.id}
            key={restaurants.info.id}
          >
            <RestaurentCard resData={restaurants} />
          </Link>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Body;
