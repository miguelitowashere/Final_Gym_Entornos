import axios from "axios";

export async function getMachines(token) {
  const response = await axios.get("http://127.0.0.1:8000/api/machines/", {
    headers: {
      Authorization: "Bearer " + token
    }
  });

  return response.data;
}
