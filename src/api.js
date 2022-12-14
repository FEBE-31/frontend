import axios from 'axios'

export const getData = async () => {
    const data = await axios.get(
        'https://restful-api-ayobantu-production.up.railway.app/campaign/all',
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }
    )

  console.log(data.data);
  return data.data.data;
};

export const userCampaign = async (id) => {
  const data = await axios.get(
    `https://restful-api-ayobantu-production.up.railway.app/campaign/user/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  console.log(data);
  return data.data;
};
