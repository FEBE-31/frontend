import Card from "./Card"
import { iconEducation, iconHealth, iconModal } from "../assets"

const ListCard = () => {
    return (
        <>
            <div className="flex gap-2 my-4 w-fill items-center">
                <p className="text-sm font-semibold hidden md:flex">Category :</p>
                <div className="flex gap-2 py-2 px-4 bg-white border items-center rounded-lg hover:shadow-lg">
                    <img className="hidden md:flex icon-category page" src={iconEducation} alt="" />
                    <p className="text-xs md:text-sm">Education</p>
                </div>
                <div className="flex gap-2 py-2 px-4 bg-white border items-center rounded-lg hover:shadow-lg">
                    <img className="hidden md:flex icon-category page" src={iconHealth} alt="" />
                    <p className="text-xs md:text-sm">Health</p>
                </div>
                <div className="flex gap-2 py-2 px-4 bg-white border items-center rounded-lg hover:shadow-lg">
                    <img className="hidden md:flex icon-category page" src={iconModal} alt="" />
                    <p className="text-xs md:text-sm">Capital Injection</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </>
    )
}

export default ListCard