import axios from "axios";
import swal from "sweetalert";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export function register(
  name,
  dob,
  address,
  national_id,
  contact,
  username,
  email,
  password,
  photo
) {
  return (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    axios
      .post(
        "https://restful-api-ayobantu-production.up.railway.app/auth/signup",
        {
          name,
          dob,
          address,
          national_id,
          contact,
          username,
          email,
          password,
          photo,
        }
      )
      .then((response) => {
        // Jika register berhasil, simpan token di local storage
        // localStorage.setItem("token", response.data.token);
        dispatch({
          type: REGISTER_SUCCESS,
          token: response,
        });

        swal({
          title: "Successfully Register!",
          text: "Your Account has created! You can login now",
          icon: "success",
          button: "Hooraaay!",
        });

        console.log(response);
      })
      .catch((error) => {
        // Jika register gagal, hapus token yang ada di local storage
        // localStorage.removeItem("token");
        if (error.response) {
          console.log(error.response.data);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error : ", error.message);
        }

        swal({
          title: "Register Failed!",
          text: `Ooopsss.. something went wrong. You want to register again?`,
          icon: "error",
          buttons: true,
          dangerMode: true,
        }).then((res) => {
          if (res) {
            swal("Are you sure to register again?", {
              icon: "warning",
              dangerMode: true,
            });
          } else {
            swal("Okayy, not a problem!", {
              dangerMode: true,
            });
          }
        });

        dispatch({
          type: REGISTER_FAILURE,
          error: error,
        });
        // console.log(error);
      });
  };
}
