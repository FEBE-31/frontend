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

    console.log(data.data)
    return data.data.data
}

export const userCampaign = async (id) => {
    const data = await axios.get(
        `https://restful-api-ayobantu-production.up.railway.app/campaign/user/${id}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }
    )

    console.log(data)
    return data.data
}

// get data campaign admin by category
export const CampaignByCategory = async (query) => {
    const data = await axios.get(
        `https://restful-api-ayobantu-production.up.railway.app/campaign/kategori/${query}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }
    )

    console.log(data.data)
    return data.data
}
