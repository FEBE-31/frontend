import React from "react";

import InputText from "../component/InputText";
import Button from "../component/Button";

import banner from "../assets/bannerDaftar.png";
import { useState } from "react";

import { register } from "../app/actions/register";
import { useDispatch } from "react-redux";

function RegisterPage() {
  const [users, setUsers] = useState({});

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUsers((values) => ({ ...values, [name]: value }));
  };

  const submitForm = (evt) => {
    evt.preventDefault();

    dispatch(register(users.username, users.password));

    console.log("Anda sudah submit");
    console.log(users);
  };

  return (
    <>
      <div className="container mx-auto lg:my-10 my-5 px-5">
        <img className="w-full rounded-md" src={banner} alt="kosong" />
        <p className="lg:text-4xl text-2xl font-bold text-sky-600 lg:my-5 my-3">
          Daftar
        </p>

        <form action="" onSubmit={submitForm} method="post">
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            <div className="basis-1/2">
              <div className="flex flex-col gap-5">
                <InputText
                  title={"Name"}
                  name={"name"}
                  type={"text"}
                  id={"nama"}
                  placeholder={"input your name"}
                  value={users.nama || ""}
                  onChange={handleChange}
                />

                <InputText
                  title={"Date of Birth"}
                  name={"DateofBirth"}
                  type={"date"}
                  id={"ttl"}
                  placeholder={"input date of birth"}
                  value={users.DateofBirth || ""}
                  onChange={handleChange}
                />

                <InputText
                  title={"National ID"}
                  name={"nationalId"}
                  type={"text"}
                  id={"nationalid"}
                  placeholder={"input your national id"}
                  value={users.nationalId || ""}
                  onChange={handleChange}
                />

                <InputText
                  name={"contact"}
                  title={"Contact"}
                  type={"text"}
                  id={"contact"}
                  placeholder={"input your phone number"}
                  value={users.contact || ""}
                  onChange={handleChange}
                />

                <InputText
                  name={"address"}
                  title={"Address"}
                  type={"text"}
                  id={"address"}
                  placeholder={"input your address"}
                  value={users.address || ""}
                  onChange={handleChange}
                />

                <InputText
                  name={"profile"}
                  title={"Foto Profile"}
                  type={"file"}
                  id={"profile"}
                  placeholder={"upload your photo"}
                  value={users.profile || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="lg:relative basis-1/4">
              <div className="flex flex-col gap-3 mb-5">
                <InputText
                  name={"email"}
                  title={"Email"}
                  type={"email"}
                  id={"email"}
                  placeholder={"input your email"}
                  value={users.email || ""}
                  onChange={handleChange}
                />

                <InputText
                  name={"username"}
                  title={"Username"}
                  type={"text"}
                  id={"username"}
                  placeholder={"input username"}
                  value={users.username || ""}
                  onChange={handleChange}
                />

                <InputText
                  name={"password"}
                  title={"Password"}
                  type={"password"}
                  id={"password"}
                  placeholder={"input your password"}
                  value={users.password || ""}
                  onChange={handleChange}
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
              <div className="lg:absolute lg:bottom-0 w-full my-5 lg:my-0">
                <Button name="Register" bgcolor="bg-teal-600" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
