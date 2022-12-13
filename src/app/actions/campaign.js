import axios from "axios";

export const CAMPAIGN_REQUEST = "CAMPAIGN_REQUEST";
export const CAMPAIGN_SUCCESS = "CAMPAIGN_SUCCESS";
export const CAMPAIGN_FAILURE = "CAMPAIGN_FAILURE";

export function campaign(username, password) {
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

        console.log(error.response.data);
      });
  };
}
