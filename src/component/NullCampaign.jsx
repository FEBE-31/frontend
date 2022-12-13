import { notFoundImage } from '../assets'
import { Link } from 'react-router-dom'

const NullCampaign = () => {
    return (
        <>
            <div className='flex items-center justify-center mt-10'>
                <div className='flex flex-col gap-2'>
                    <img src={notFoundImage} alt='' className='w-full' />
                    <h3>You haven't created any Campaign yet</h3>
                    <Link
                        className='w-full py-2 rounded-md text-white bg-sky-600 hover:bg-sky-700 text-center'
                        to='/createCampaign'
                    >
                        Create Campaign
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NullCampaign
