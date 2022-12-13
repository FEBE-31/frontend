import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT_SUCCESS";

export function login(username, password) {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    axios
      .post(
        "https://restful-api-ayobantu-production.up.railway.app/auth/login",
        { username, password }
      )
      .then((response) => {
        // Jika login berhasil, simpan token di local storage
        localStorage.setItem("token", response.data.accessToken);
        dispatch({
          type: LOGIN_SUCCESS,
          token: response.data.accessToken,
          role: response.data.user.role,
        });

        swal({
          title: "Successfully Login!",
          text: "Login Success",
          icon: "success",
          button: "Hooraaay!",
        });

        console.log(response.data);
        // console.log(response.data);
        // return response.data;
      })
      .catch((error) => {
        // Jika login gagal, hapus token yang ada di local storage
        // localStorage.removeItem("token", response.data.accessToken);
        dispatch({
          type: LOGIN_FAILURE,
          error: "login gagal!",
        });

        swal({
          title: "Login Failed!",
          text: `Ooopsss.. something went wrong. Username and Password is Incorrect!`,
          icon: "error",
          dangerMode: true,
        });

        console.log(error.response.data);
        // return error;
      });
  };
}

export function logout() {
  return (dispatch, res) => {
    localStorage.removeItem("token", res.accessToken);

    console.log(res);

    dispatch({
      type: LOGOUT,
      token: null,
    });

    swal({
      title: "Successfully Logout!",
      text: "Logout Success",
      icon: "success",
      button: "Okayyy!",
    });
  };
}
