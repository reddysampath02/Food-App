import { LOGO_URL } from "../Utils/constants";
import { APP_URL } from "../Utils/constants";

const Footer = () => {
  return (
    <div>
      <div className=" flex  flex-wrap w-full h-[130px] bg-gray-200 justify-center items-center">
        <div>
          <p className=" font-bold text-3xl text-gray-800">
            For better experience,download
          </p>
          <p className="font-bold text-3xl text-gray-800">the Swiggy app now</p>
        </div>
        <div className="my-1 flex">
          <img
            src={APP_URL + "play_store.png"}
            className="w-[200px] h-[60px] ml-5 cursor-pointer"
          />
          <img
            src={APP_URL + "app_store.png"}
            className="w-[200px] h-[60px] cursor-pointer ml-4"
          />
        </div>
      </div>
      <div className="w-full bg-black flex-grow flex flex-wrap justify-center pt-9">
        <div className=" m-1">
          <div className="flex">
            <img src={LOGO_URL} className="w-[70px] rounded-full " />
            <p className="text-gray-200 font-extrabold text-2xl ml-3 mt-5">
              FoodApp
            </p>
          </div>
          <div className=" ">
            <p className="text-gray-400 ">© 2024 Bundl Technologies</p>
            <p className="text-gray-400">Pvt. Ltd</p>
          </div>
        </div>
        <div className="ml-11 font-medium">
          <p className="text-gray-200 text-lg  ">Company</p>
          <p className="text-gray-400 text-base my-4 cursor-pointer">About</p>
          <p className="text-gray-400 text-base my-4 cursor-pointer">Team</p>
          <p className="text-gray-400 text-base my-4 cursor-pointer">Careers</p>
          <p className="text-gray-400 text-base my-4 cursor-pointer">
            Swiggy One
          </p>
          <p className="text-gray-400 text-base my-4 cursor-pointer">
            Swiggy InstMart
          </p>
          <p className="text-gray-400 text-base my-4 cursor-pointer">
            Swiggy Genie
          </p>
        </div>
        <div className="ml-[150px] font-semibold">
          <div>
            <p className="text-gray-200 text-lg ">Contact Us</p>
            <p className="text-gray-400 text-base my-4 cursor-pointer">
              Help & Support
            </p>
            <p className="text-gray-400 text-base my-4 cursor-pointer">
              Ride with us
            </p>
            <p className="text-gray-400 text-base my-4">Partner With us</p>
          </div>
          <div>
            <p className="text-gray-200 text-lg mt-6 ">Legal</p>
            <p className="text-gray-400 text-base my-4 cursor-pointer">
              Terms & Conditions
            </p>
            <p className="text-gray-400 text-base my-4 cursor-pointer">
              Cookie Policy
            </p>
            <p className="text-gray-400 text-base my-4 cursor-pointer">
              Privacy Policy
            </p>
          </div>
        </div>
        <div className="ml-[150px] font-semibold">
          <p className="text-gray-200 text-lg ">We deliver to:</p>
          <p className="text-gray-400 text-base my-4 cursor-pointer">
            Bangalore
          </p>
          <p className="text-gray-400 text-base my-4 cursor-pointer">
            Hyderabad
          </p>
          <p className="text-gray-400 text-base my-4 cursor-pointer">Chennai</p>
          <p className="text-gray-400 text-base my-4 cursor-pointer">Pune</p>
          <p className="text-gray-400 text-base my-4 cursor-pointer">Delhi</p>
          <p className="text-gray-400 text-base my-4 cursor-pointer">Mumbai</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
