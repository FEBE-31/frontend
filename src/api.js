import axios from "axios";

export const getData = async () => {
  const data = await axios.get(
    "https://restful-api-ayobantu-production.up.railway.app/campaign/6385fd477ba910f672d65362"
    // "https://pokeapi.co/api/v2/pokemon/ditto"
  );

  console.log(data);
  return data;
};
