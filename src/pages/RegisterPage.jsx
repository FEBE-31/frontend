import React from 'react'

import InputText from '../component/InputText'
import Button from '../component/Button'

import banner from '../assets/bannerDaftar.png'
import { useState } from 'react'

import { register } from '../app/actions/register'
import { useDispatch } from 'react-redux'

function RegisterPage() {
    // const [users, setUsers] = useState({});

    const [name, setName] = useState()
    const [dob, setDob] = useState()
    const [address, setAddress] = useState()
    const [national_id, setNationalId] = useState()
    const [contact, setContact] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [photo, setPhoto] = useState()

    const dispatch = useDispatch()

    const submitForm = (evt) => {
        evt.preventDefault()

        try {
            dispatch(
                register(
                    name,
                    dob,
                    address,
                    national_id,
                    contact,
                    username,
                    email,
                    password,
                    photo
                )
            )
        } catch (error) {
            console.log(error)
        }

        console.log('Anda sudah submit')
        console.log({
            datas: {
                nama: name,
                dob: dob,
                address: address,
                national_id: national_id,
                contact: contact,
                username: username,
                email: email,
                password: password,
                photo: photo,
            },
        })

        setTimeout(() => {
            setName('')
            console.log(name)
        }, 3000)
    }

    return (
        <>
            <div className='container mx-auto lg:my-10 my-5 px-5'>
                <img className='w-full rounded-md' src={banner} alt='kosong' />
                <p className='lg:text-4xl text-2xl font-bold text-sky-600 lg:my-5 my-3'>
                    Daftar
                </p>

                <form action='' onSubmit={submitForm} method='post'>
                    <div className='flex flex-col lg:flex-row gap-5 justify-between'>
                        <div className='basis-1/2'>
                            <div className='flex flex-col gap-5'>
                                <InputText
                                    title={'Name'}
                                    name={'name'}
                                    type={'text'}
                                    id={'nama'}
                                    placeholder={'input your name'}
                                    value={name || ''}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                />

                                <InputText
                                    title={'Date of Birth'}
                                    name={'dob'}
                                    type={'date'}
                                    id={'ttl'}
                                    placeholder={'input date of birth'}
                                    value={dob || ''}
                                    onChange={(event) =>
                                        setDob(event.target.value)
                                    }
                                />

                                <InputText
                                    title={'National ID'}
                                    name={'national_id'}
                                    type={'text'}
                                    id={'national_id'}
                                    placeholder={'input your national id'}
                                    value={national_id || ''}
                                    onChange={(event) =>
                                        setNationalId(event.target.value)
                                    }
                                />

                                <InputText
                                    name={'contact'}
                                    title={'Contact'}
                                    type={'text'}
                                    id={'contact'}
                                    placeholder={'input your phone number'}
                                    value={contact || ''}
                                    onChange={(event) =>
                                        setContact(event.target.value)
                                    }
                                />

                                <InputText
                                    name={'address'}
                                    title={'Address'}
                                    type={'text'}
                                    id={'address'}
                                    placeholder={'input your address'}
                                    value={address || ''}
                                    onChange={(event) =>
                                        setAddress(event.target.value)
                                    }
                                />

                                <InputText
                                    name={'photo'}
                                    title={'Foto Profile'}
                                    type={'file'}
                                    id={'profile'}
                                    placeholder={'upload your photo'}
                                    value={photo || ''}
                                    onChange={(event) =>
                                        setPhoto(event.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className='lg:relative basis-1/4'>
                            <div className='flex flex-col gap-3 mb-5'>
                                <InputText
                                    name={'email'}
                                    title={'Email'}
                                    type={'email'}
                                    id={'email'}
                                    placeholder={'input your email'}
                                    value={email || ''}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />

                                <InputText
                                    name={'username'}
                                    title={'Username'}
                                    type={'text'}
                                    id={'username'}
                                    placeholder={'input username'}
                                    value={username || ''}
                                    onChange={(event) =>
                                        setUsername(event.target.value)
                                    }
                                />

                                <InputText
                                    name={'password'}
                                    title={'Password'}
                                    type={'password'}
                                    id={'password'}
                                    placeholder={'input your password'}
                                    value={password || ''}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                />

                                {/* <InputText
                  name={"supportingFile1"}
                  title={"Supporting File 1"}
                  type={"file"}
                  id={"supportingFile1"}
                  placeholder={"upload your photo"}
                  value={users.supportingFile1 || ""}
                  onChange={handleChange}
                />

                <InputText
                  name={"supportingFile2"}
                  title={"Supporting File 2"}
                  type={"file"}
                  id={"supportingFile2"}
                  placeholder={"upload your photo"}
                  value={users.supportingFile2 || ""}
                  onChange={handleChange}
                /> */}
                            </div>
                            <div className='lg:absolute lg:bottom-0 w-full my-5 lg:my-0'>
                                <Button name='Register' bgcolor='bg-teal-600' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterPage
