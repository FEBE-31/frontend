import { dummyImage } from "../assets"
import InputText from "../component/InputText"

const CreateCampaign = () => {
    return (
        <>
            <div className="container mx-auto px-4 mt-6 mb-20">
                <h2 className="text-xl font-semibold">Create Campaign</h2>
                <div className="flex flex-col lg:flex-row justify-between gap-5 mt-8">
                    <div className="lg:w-1/4">
                        <img src={dummyImage} alt="" className="lg:w-full" />
                    </div>
                    <div className="lg:w-1/2">
                        <form action="" className="flex flex-col gap-4 lg:w-3/4">
                            <label htmlFor="Name">Campaign Name</label>
                            <InputText type="text" placeholder="input campaign name" />
                            <label htmlFor="Kategori">Catergory</label>

                            {/* input type checkbox */}
                            <div className="flex gap-4 mb-3">
                                <div className="flex gap-2">
                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Education</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Health</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Capital Injection</label>
                                </div>
                            </div>
                            <label htmlFor="Name">Address</label>
                            <InputText type="text" placeholder="input address campaign" />
                            <label htmlFor="Name">Type of disabilty</label>
                            <InputText type="text" placeholder="input '-' if not disability" />
                            <label htmlFor="Deskripsi">Descriptions</label>
                            <textarea className="outline-none bg-slate-100 border border-slate-200 px-3 py-2 rounded-md" name="" id="" cols="40" rows="6" placeholder="input clear and honest descriptions"></textarea>
                            <button className="w-full py-1 bg-succes-color text-white rounded-md hover:bg-green-700">Publish</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateCampaign

