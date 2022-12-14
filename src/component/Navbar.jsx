import { iconUser, logoAyoBantu } from '../assets'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../app/actions/login'
import { useState, useEffect } from 'react'
import 'animate.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    const navigation = useNavigate()
    const selector = useSelector((state) => state)

    const handlelogout = () => {
        try {
            dispatch(logout())
            navigation(`/login`)

            setToggle(true)
            console.log('berhasil logout')
            console.log(selector)
        } catch (error) {
            console.log(error)
        }
    }

    const akses = { aksesToken: localStorage.getItem('token') }

    const ToggleData = () => {
        setShow(!show)

        console.log('tertekan')
    }
    console.log(show)

    // console.log(toggle ? "tampil btn logout" : "tampil btn login");

    useEffect(() => {
        if (akses.aksesToken === null) {
            setToggle(false)
        } else {
            setToggle(true)
        }
        // akses ? setToggle(true) : setToggle(false);
        // console.log(akses)
    }, [akses])

    // console.log(toggle);

    return (
        <>
            <header className=''>
                <nav className='container mx-auto flex justify-between items-center bg-white h-16 z-20 relative'>
                    <Link to='/'>
                        <img src={logoAyoBantu} alt='logo Ayo Bantu' />
                    </Link>
                    <div className='md:flex gap-3 hidden'>
                        <Link
                            to='/'
                            className='px-4 py-2 text-main-color hover:text-second-color font-semibold'
                        >
                            Home
                        </Link>
                        <Link
                            to='/userCampaign'
                            className='px-4 py-2 text-main-color hover:text-second-color font-semibold'
                        >
                            Create Campaign
                        </Link>
                        <Link
                            to='/about'
                            className='px-4 py-2 text-main-color hover:text-second-color font-semibold'
                        >
                            About
                        </Link>

                        {toggle ? (
                            <button
                                onClick={handlelogout}
                                className='px-4 py-2 font-semibold bg-main-color hover:bg-second-color text-white rounded-lg'
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                to='/login'
                                className='px-4 py-2 font-semibold bg-main-color hover:bg-second-color text-white rounded-lg'
                            >
                                Login
                            </Link>
                        )}
                    </div>
                    <Link className='md:hidden lg:hidden'>
                        <img src={iconUser} alt='' onClick={ToggleData} />
                    </Link>
                </nav>

                {!show ? (
                    ''
                ) : (
                    <div className='flex flex-col gap-3 bg-white p-3 animate__slow animate__animated animate__slideInDown z-0'>
                        <Link
                            to='/'
                            className='px-4 py-2 text-main-color hover:text-second-color font-semibold'
                        >
                            Home
                        </Link>
                        <Link
                            to='/userCampaign'
                            className='px-4 py-2 text-main-color hover:text-second-color font-semibold'
                        >
                            Create Campaign
                        </Link>
                        <Link
                            to='/about'
                            className='px-4 py-2 text-main-color hover:text-second-color font-semibold'
                        >
                            About
                        </Link>

                        {toggle ? (
                            <button
                                onClick={handlelogout}
                                className='px-4 py-2 font-semibold bg-main-color hover:bg-second-color text-white rounded-lg'
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                to='/login'
                                className='px-4 py-2 font-semibold bg-main-color hover:bg-second-color text-white rounded-lg'
                            >
                                Login
                            </Link>
                        )}
                    </div>
                )}
            </header>
        </>
    )
}

export default Navbar
