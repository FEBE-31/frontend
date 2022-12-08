import axios from "axios";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export function register(username, password) {
  return (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    axios
      .post(
        "https://restful-api-ayobantu-production.up.railway.app/auth/signup",
        { username, password }
      )
      .then((response) => {
        // Jika register berhasil, simpan token di local storage
        // localStorage.setItem("token", response.data.token);
        dispatch({
          type: REGISTER_SUCCESS,
          token: response,
        });
        console.log(response);
      })
      .catch((error) => {
        // Jika register gagal, hapus token yang ada di local storage
        // localStorage.removeItem("token");
        dispatch({
          type: REGISTER_FAILURE,
          error: error,
        });
        // console.log(error);
      });
  };
}
