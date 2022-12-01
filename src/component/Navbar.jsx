import { iconUser, logoAyoBantu } from '../assets'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <header className=''>
                <nav className='container mx-auto flex justify-between items-center h-16'>
                    <Link to='/'><img src={logoAyoBantu} alt="logo Ayo Bantu" />
                    </Link>
                    <div className='md:flex gap-3 hidden'>
                        <Link to='/' className='px-4 py-2 text-main-color hover:text-second-color font-semibold'>Home</Link>
                        <Link to='/userCampaign' className='px-4 py-2 text-main-color hover:text-second-color font-semibold'>Create Campaign</Link>
                        <Link to='/about' className='px-4 py-2 text-main-color hover:text-second-color font-semibold'>About</Link>
                        <Link to='/login' className='px-4 py-2 font-semibold bg-main-color hover:bg-second-color text-white rounded-lg'>Login</Link>
                    </div>
                    <Link className='md:hidden lg:hidden'><img src={iconUser} alt="" /></Link>
                </nav>
            </header>
        </>
    )
}

export default Navbar