import axiosClient from "./axiosClient";

const requestApi = {
    getall:()=>axiosClient.get("/requests/"),
    getbyid:(id)=>axiosClient.get(`/requests/${id}/`),
    getbyuser:(userid)=>axiosClient.get(`/requests/user/${userid}/`),
    create:(data)=>axiosClient.post("/requests/",data),
    update:(id,data)=>axiosClient.put(`/requests/${id}/`,data),
    delete:(id)=>axiosClient.delete(`/requests/${id}/`),
}

export default requestApi;


