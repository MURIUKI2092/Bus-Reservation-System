import axios from "axios"

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {}

const instance = () => {
  const user = getUser()

  return axios.create({
    baseURL: "http://127.0.0.1:8080/api/",
    withCredentials: false,
    headers: {
      Authorization: user.token ? `Token ${user.token}` : "",
    },
  })
}

export default instance
