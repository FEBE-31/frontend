import Card from './Card'
import { iconEducation, iconHealth, iconModal } from '../assets'
import { getData, CampaignByCategory } from '../api'
import { useEffect, useState } from 'react'
// useEffect

const ListCard = () => {
    const [data, setdata] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            getData()
                .then((res) => {
                    localStorage.setItem('datas', JSON.stringify(res))
                    setdata(res)
                })
                .catch((err) => {
                    console.log(err)
                    setIsError(true)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }, 3000)
    }, [])

    const byCategory = async (q) => {
        const category = await CampaignByCategory(q)
        setdata(category.data)

        console.log(category.data)
    }

    const getdb = localStorage.getItem('datas')
    const obj = JSON.parse(getdb)

    console.log(isLoading)

    // console.log(obj.image);

    return (
        <>
            {/* <p>{data.data.category}</p> */}
            <div className='flex gap-2 my-4 w-fill items-center'>
                <p className='text-sm font-semibold hidden md:flex'>
                    Category :
                </p>
                <div className='flex gap-2 py-2 px-4 bg-white border items-center rounded-lg hover:shadow-lg'>
                    <img
                        className='hidden md:flex icon-category page'
                        src={iconEducation}
                        alt=''
                    />
                    <button
                        className='text-xs md:text-sm'
                        value='pendidikan'
                        onClick={({ target }) => byCategory(target.value)}
                    >
                        Education
                    </button>
                </div>
                <div className='flex gap-2 py-2 px-4 bg-white border items-center rounded-lg hover:shadow-lg'>
                    <img
                        className='hidden md:flex icon-category page'
                        src={iconHealth}
                        alt=''
                    />
                    <button
                        className='text-xs md:text-sm cursor-not-allowed'
                        disabled
                    >
                        Health
                    </button>
                </div>
                <div className='flex gap-2 py-2 px-4 bg-white border items-center rounded-lg hover:shadow-lg'>
                    <img
                        className='hidden md:flex icon-category page'
                        src={iconModal}
                        alt=''
                    />
                    <button
                        className='text-xs md:text-sm'
                        value='modal'
                        onClick={({ target }) => byCategory(target.value)}
                    >
                        Capital Injection
                    </button>
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-full flex-wrap'>
                {isLoading && (
                    <div className='w-full h-[50vh] flex items-center justify-center'>
                        <div
                            role='status'
                            className='flex items-center justify-center'
                        >
                            <svg
                                aria-hidden='true'
                                className='mr-2 w-8 h-8 text-gray-200 animate-spin fill-blue-600'
                                viewBox='0 0 100 101'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                                    fill='currentFill'
                                />
                            </svg>
                            <span>Loading...</span>
                        </div>
                    </div>
                )}

                {isError && (
                    <button className='relative cursor-not-allowed' disabled>
                        <div className='bg-red-200 border-red-100 border-2 px-5 py-2 rounded-lg mt-1'>
                            <div className='text-neutral-900'>
                                <p>Server Error</p>
                            </div>
                            <span className='flex h-3.5 w-3.5 absolute top-0 right-0'>
                                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75'></span>
                                <span className='relative inline-flex rounded-full h-3.5 w-3.5 bg-red-400'></span>
                            </span>
                        </div>
                    </button>
                )}

                {!isLoading &&
                    data.map((items) => (
                        <div
                            key={items._id}
                            className='w-full md:w-25 animate__animated animate__fadeIn animate__slow'
                        >
                            <Card
                                title={items.title}
                                category={items.category}
                                description={items.description}
                            />
                        </div>
                    ))}

                {/* {data.length < 1 ? (
                    <button type='button' class='bg-indigo-500 ...' disabled>
                        <svg
                            class='animate-spin h-5 w-5 mr-3 ...'
                            viewBox='0 0 24 24'
                        ></svg>
                        Processing...
                    </button>
                ) : (
                    data.map((items) => (
                        <div
                            key={items._id}
                            className='w-full md:w-25 animate__animated animate__fadeIn animate__slow'
                        >
                            <Card
                                title={items.title}
                                category={items.category}
                                description={items.description}
                            />
                        </div>
                    ))
                )} */}
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
    )
}

export default ListCard
