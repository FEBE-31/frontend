import Card from "./Card";
import { iconEducation, iconHealth, iconModal } from "../assets";
import { getData } from "../api";
import { useEffect, useState } from "react";
// useEffect

const ListCard = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => {
        localStorage.setItem("datas", JSON.stringify(res));
        setdata(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getdb = localStorage.getItem("datas");
  const obj = JSON.parse(getdb);

  console.log(data);
  // console.log(obj.image);

  return (
    <>
      {/* <p>{data.data.category}</p> */}
      <div className="flex gap-2 my-4 w-fill items-center">
        <p className="text-sm font-semibold hidden md:flex">Category :</p>
        <div className="flex gap-2 py-2 px-4 bg-white border items-center rounded-lg hover:shadow-lg">
          <img
            className="hidden md:flex icon-category page"
            src={iconEducation}
            alt=""
          />
          <p className="text-xs md:text-sm">Education</p>
        </div>
        <div className="flex gap-2 py-2 px-4 bg-white border items-center rounded-lg hover:shadow-lg">
          <img
            className="hidden md:flex icon-category page"
            src={iconHealth}
            alt=""
          />
          <p className="text-xs md:text-sm">Health</p>
        </div>
        <div className="flex gap-2 py-2 px-4 bg-white border items-center rounded-lg hover:shadow-lg">
          <img
            className="hidden md:flex icon-category page"
            src={iconModal}
            alt=""
          />
          <p className="text-xs md:text-sm">Capital Injection</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full flex-wrap">
        {data.length < 1 ? (
          <p>Data Kosong!</p>
        ) : (
          data.map((items) => (
            <div key={items._id} className="w-full md:w-25">
              <Card
                title={items.title}
                category={items.category}
                description={items.description}
              />
            </div>
          ))
        )}

        {/* {data.length < 1 ? <p>data null</p> : <p>data ada</p>} */}

        {/* {data && data[0].map((items) => console.log(items.title))} */}
        {/* <Campaign /> */}
        {/* {data
          ? data.map((items, idx) => (
              
            ))
          : console.log("none")} */}

        {/* {data.data.title} */}
      </div>
    </>
  );
};

export default ListCard;
