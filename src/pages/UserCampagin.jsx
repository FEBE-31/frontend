import NullCampaign from "../component/NullCampaign";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userCampaign } from "../api";
import { useEffect } from "react";

const UserCampaign = () => {
  const selector = useSelector((state) => state);

  console.log(selector);

  const dataId = localStorage.getItem("dataCampaign");
  const obj = JSON.parse(dataId);

  console.log(obj);

  const user = "63969270777960c8e92342bd";

  useEffect(() => {
    userCampaign(user).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <NullCampaign />
      <Link to="/createCampaign" className="add fixed flex gap-2 items-center">
        <p className="hidden md:flex py-1 px-2 text-white bg-main-color hover:bg-second-color rounded-lg shadow-lg">
          Add Campagin
        </p>
        <BsFillPlusCircleFill
          fontSize="2em"
          className="text-main-color hover:text-second-color shadow-lg rounded-full"
        />
      </Link>
    </>
  );
};

export default UserCampaign;
