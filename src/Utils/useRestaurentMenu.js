import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
// import { useParams } from "react-router-dom";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

//   const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurentMenu;
