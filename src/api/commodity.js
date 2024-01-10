import request from "../utils/request";

export const getGoods = (params) => {
    return request({
        url: "/goods",
        method: "get",
        params
    })
}
export const getGoodsDetail = (id) => {
    return request({
        url: "/goods/" + id,
        method: "get",
    })
}