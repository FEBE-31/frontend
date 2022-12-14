import axios from "axios";

export const CAMPAIGN_REQUEST = "CAMPAIGN_REQUEST";
export const CAMPAIGN_SUCCESS = "CAMPAIGN_SUCCESS";
export const CAMPAIGN_FAILURE = "CAMPAIGN_FAILURE";

export function createCampaign(
  user,
  title,
  address,
  description,
  image,
  supportingFile1,
  supportingFile2,
  category
) {
  return (dispatch) => {
    dispatch({ type: CAMPAIGN_REQUEST });

    axios
      .post(
        "https://restful-api-ayobantu-production.up.railway.app/campaign",
        {
          user,
          title,
          address,
          description,
          image,
          supportingFile1,
          supportingFile2,
          category,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        // Jika login berhasil, simpan token di local storage

        localStorage.setItem(
          "dataCampaign",
          JSON.stringify(response.data.data)
        );

        dispatch({
          type: CAMPAIGN_SUCCESS,
          msg: response.data.message,
          id: response.data.data._id,
        });

        // swal({
        //   title: "Successfully Login!",
        //   text: "Login Success",
        //   icon: "success",
        //   button: "Hooraaay!",
        // });

        console.log(response.data);
      })
      .catch((error) => {
        // Jika login gagal, hapus token yang ada di local storage
        // localStorage.removeItem("token", response.data.data);

        dispatch({
          type: CAMPAIGN_FAILURE,
          error: "gagal post!",
        });

        console.log(error.response.data);
      });
  };
}
