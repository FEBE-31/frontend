import { dummyImage } from "../assets";
import { useState } from "react";

const Card = ({ category, title, description }) => {
  const [show, setShow] = useState(false);

  const role = 'admin'

  const ToggleData = () => {
    setShow(!show);
  };

  return (
    <div className="card border rounded-lg overflow-visibilty mb-5 mx-1 drop-shadow-lg bg-white">
      <div className="photo-card overflow-hidden">
        <img src={dummyImage} alt="" className="w-full" />
      </div>
      {show ? (
        <div className="text-sm relative bg-white w-full p-4">
          <p className="text-xs">{category}</p>
          <h2 className="mb-2 font-semibold">{title}</h2>
          <p className="text-sm">{description}</p>
          <p className="text-xs my-2 text-orens-color">East Java, Indonesia</p>
          <p className="mb-1">Type disability</p>
          <img
            className="mb-1 w-full"
            src={dummyImage}
            alt="supporting file 1"
          />
          <img
            className="mb-1 w-full"
            src={dummyImage}
            alt="supporting file 2"
          />
          <div className="text-sm mt-4">
            <button
              onClick={ToggleData}
              className="w-1/2 py-1 bg-stone-300 hover:bg-stone-200 rounded-md"
            >
              {!show ? "View more" : "View less"}
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <p className="text-xs">{category}</p>
          <h2 className="mb-2 font-semibold">{title}</h2>
          <p className="text-sm">{description}</p>
          <div className="text-sm mt-4">
            {role == 'admin' ? 
            <div>
                <p onClick={ToggleData} className='mb-3 hover:text-orens-color inline-block'>view more</p>
                <div className="flex gap-2 justify-between">
                  <button
                    // onClick={}
                    className="w-1/2 py-1 bg-succes-color hover:bg-green-500 rounded-md text-white"
                  >
                    Accept
                  </button> 
                  <button
                    // onClick={}
                    className="w-1/2 py-1 bg-alert-color hover:bg-red-500 rounded-md text-white"
                  >
                    Reject
                  </button>
                </div>
            </div>
            
            : 
            <button
              onClick={ToggleData}
              className="w-1/2 py-1 bg-stone-300 hover:bg-stone-200 rounded-md"
            >
              {!show ? "View more" : "View less"}
            </button>

            }
            {/* <button
              onClick={ToggleData}
              className="w-1/2 py-1 bg-stone-300 hover:bg-stone-200 rounded-md"
            >
              {!show ? "View more" : "View less"}
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
