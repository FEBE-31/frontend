import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

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
        // localStorage.setItem("token", response.data.token);
        localStorage.setItem("token", response);
        dispatch({
          type: LOGIN_SUCCESS,
          token: response,
        });
        console.log(response);
      })
      .catch((error) => {
        // Jika login gagal, hapus token yang ada di local storage
        localStorage.removeItem("token");
        dispatch({
          type: LOGIN_FAILURE,
          error: error,
        });
        console.log(error);
      });
  };
}
