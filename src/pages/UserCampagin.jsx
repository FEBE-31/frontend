import NullCampaign from "../component/NullCampaign"
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const UserCampaign = () => {
    return (
        <>
            <NullCampaign />
            <Link to='/createCampaign' className='add fixed flex gap-2 items-center'>
                <p className="hidden md:flex py-1 px-2 text-white bg-main-color hover:bg-second-color rounded-lg shadow-lg">Add Campagin</p>
                <BsFillPlusCircleFill fontSize='2em' className="text-main-color hover:text-second-color shadow-lg rounded-full" />
            </Link>
        </>
    )
}

export default UserCampaign