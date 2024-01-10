import Cookies from "js-cookie"
export const getToken = () => {
    return Cookies.get("token")
}
export const setToken = (data) => {
    Cookies.set("token", data)
}
export const removeToken = () => {
    Cookies.remove("token")
}