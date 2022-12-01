import { dummyImage } from "../assets"

const Card = () => {
    return (
        <div className="card w-full md:w-25 border rounded-lg overflow-hidden mb-5 mx-1 drop-shadow-lg bg-white">
            <div className="photo-card overflow-hidden">
                <img src={dummyImage} alt="" className="w-full" />
            </div>
            <div className="p-4 ">
                <h2 className="mb-2 font-semibold">Nama Campaign</h2>
                <p className="text-sm">Deskirpsi campaign yang cukup panjang dan lebih panjang agar jelas</p>
                <div className="text-sm mt-4 flex justify-between gap-2">
                    <button className="w-1/2 py-1 bg-succes-color text-white rounded-md hover:bg-green-700">Donate</button>
                    <button className="w-1/2 py-1 bg-stone-300 rounded-md">View more</button>
                </div>
            </div>
        </div>
    )
}

export default Card