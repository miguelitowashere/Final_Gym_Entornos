import axios from "axios";

const API = "http://127.0.0.1:8000/api/auth/";

export async function loginRequest(username, password) {
  return axios.post(API + "login/", { username, password });
}

export async function getMe(token) {
  return axios.get(API + "me/", {
    headers: { Authorization: "Bearer " + token },
  });
}
