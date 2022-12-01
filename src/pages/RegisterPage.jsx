import React from "react";

import InputText from "../component/InputText";
import Checkbox from "../component/Checkbox";
import Button from "../component/Button";

import banner from "../assets/bannerDaftar.png";
import { useState } from "react";

function RegisterPage() {
  const [users, setUsers] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUsers((values) => ({ ...values, [name]: value }));
  };

  const submitForm = (evt) => {
    evt.preventDefault();

    console.log("Anda sudah submit");
    console.log(users);

    reset();
  };

  return (
    <>
      <div className="container mx-auto lg:my-10 my-5 px-5">
        <img className="w-full rounded-md" src={banner} alt="kosong" />
        <p className="lg:text-4xl text-2xl font-bold text-sky-600 lg:my-5 my-3">
          Daftar
        </p>

        <div className="flex gap-5 mb-3">
          <Checkbox name={"Partner/Donatur"} />
          <Checkbox name={"Penggalang Dana"} />
        </div>

        <form action="" onSubmit={submitForm} method="post">
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            <div className="basis-1/2">
              <div className="flex flex-col gap-5">
                <InputText
                  title={"Nama"}
                  name={"nama"}
                  type={"text"}
                  id={"nama"}
                  placeholder={"masukkan nama lengkap"}
                  value={users.nama || ""}
                  onChange={handleChange}
                />
                <InputText
                  title={"Tanggal Lahir"}
                  name={"ttl"}
                  type={"date"}
                  id={"ttl"}
                  placeholder={"masukkan tanggal lahir"}
                  value={users.ttl || ""}
                  onChange={handleChange}
                />
                <InputText
                  name={"telp"}
                  title={"No Telepon"}
                  type={"text"}
                  id={"telp"}
                  placeholder={"masukkan nomor telepon"}
                  value={users.telp || ""}
                  onChange={handleChange}
                />
                <InputText
                  name={"email"}
                  title={"Email"}
                  type={"email"}
                  id={"email"}
                  placeholder={"masukkan email"}
                  value={users.email || ""}
                  onChange={handleChange}
                />
                <InputText
                  name={"alamat"}
                  title={"Alamat"}
                  type={"text"}
                  id={"alamat"}
                  placeholder={"masukkan alamat"}
                  value={users.alamat || ""}
                  onChange={handleChange}
                />
                <InputText
                  name={"username"}
                  title={"Username"}
                  type={"text"}
                  id={"username"}
                  placeholder={"masukkan username"}
                  value={users.username || ""}
                  onChange={handleChange}
                />
                <InputText
                  name={"password"}
                  title={"Password"}
                  type={"password"}
                  id={"password"}
                  placeholder={"masukkan password"}
                  value={users.password || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="lg:relative basis-1/4">
              <div className="flex flex-col gap-3 mb-5">
                <InputText
                  name={"Berkas 1"}
                  type={"text"}
                  placeholder={"masukkan data"}
                />
                <Button name="Upload Berkas" bgcolor="bg-sky-600" />
              </div>
              <div className="flex flex-col gap-3">
                <InputText
                  name={"Berkas 1"}
                  type={"text"}
                  placeholder={"masukkan data"}
                />
                <Button name="Upload Berkas" bgcolor="bg-sky-600" />
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
