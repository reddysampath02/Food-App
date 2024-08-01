import { Form } from "react-router-dom";

const Contact = () => {
  return (
    <div className="text-center w-[30%] mx-auto m-3">
      <h1 className="font-bold text-3xl p-4  text-start">Contact Page</h1>
      <form className="flex flex-col">
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="number"
          className="border border-black p-2 m-2"
          placeholder="Mobile Num"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Email"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Message"
        />

        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg hover:text-orange-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
