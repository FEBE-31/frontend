import InputText from "../component/InputText";
import { Link } from "react-router-dom";
import { loginImage } from "../assets";

import { login } from "../app/actions/login";
import { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(login(username, password));

    console.log("Sudah login");
    console.log("Username : ", username);
    console.log("Password : ", password);
  };

  // console.log(username);
  // console.log(password);

  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center">
      <div className="w-3/4 md:w-1/2 p-10">
        <img src={loginImage} alt="" />
      </div>
      <div className="w-3/4 md:w-1/2">
        <p className="mb-5 text-2xl font-semibold text-sky-700">Login</p>

        <form action="" onSubmit={handleSubmit}>
          <div className="flex gap-4 mb-3">
            <div className="flex gap-2">
              <input type="radio" name="" id="admin" />
              <label htmlFor="">Admin</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="" id="user" />
              <label htmlFor="">User</label>
            </div>
          </div>

          {/* text input */}
          <div className="flex flex-col gap-5 lg:w-3/4">
            <InputText
              type="text"
              placeholder="input username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />

            <InputText
              type="password"
              placeholder="input password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <div className="text-center">
              <button
                type="submit"
                className="w-full py-2 my-3 bg-main-color hover:bg-second-color text-white rounded-md"
              >
                Login
              </button>
              <p>
                Dont have account?{" "}
                <Link to="/register">
                  <span className="text-sky-600">Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
