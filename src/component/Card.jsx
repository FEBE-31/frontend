import { dummyImage } from "../assets"
import { useState } from 'react'

const Card = () => {

    const [show, setShow] = useState(false);

    const ToggleData = () => {
        setShow(!show);
    };

    return (
        <div className="card w-full md:w-25 border rounded-lg overflow-visibilty mb-5 mx-1 drop-shadow-lg bg-white">
            <div className="photo-card overflow-hidden">
                <img src={dummyImage} alt="" className="w-full" />
            </div>
            {show ? <div className="text-sm relative bg-white w-full p-4">
                <p className="text-xs">Educations</p>
                <h2 className="mb-2 font-semibold">Nama Campaign</h2>
                <p className="text-sm">Deskirpsi campaign yang cukup panjang dan lebih panjang agar jelas</p>
                <p className="text-xs my-2 text-orens-color">East Java, Indonesia</p>
                <p className="mb-1">Type disability</p>
                <img className="mb-1 w-full" src={dummyImage} alt="supporting file 1" />
                <img className="mb-1 w-full" src={dummyImage} alt="supporting file 2" />
                <div className="text-sm mt-4">
                    <button onClick={ToggleData} className="w-1/2 py-1 bg-stone-300 hover:bg-stone-200 rounded-md">
                        {!show ? "View more" : 'View less'}
                    </button>
                </div>
            </div> :
                <div className="p-4">
                    <p className="text-xs">Educations</p>
                    <h2 className="mb-2 font-semibold">Nama Campaign</h2>
                    <p className="text-sm">Deskirpsi campaign yang cukup panjang dan lebih panjang agar jelas</p>
                    <div className="text-sm mt-4">
                        <button onClick={ToggleData} className="w-1/2 py-1 bg-stone-300 hover:bg-stone-200 rounded-md">
                            {!show ? "View more" : 'View less'}
                        </button>
                    </div>
                </div>}
        </div>
    )
}

export default Card