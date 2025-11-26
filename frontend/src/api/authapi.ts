import axiosClient from "./axiosClient";


const apiAuth={
    login:(data)=>axiosClient.post("/auth/login/",data),
    register:(data)=>axiosClient.post("/auth/register/",data),
    logout:()=>axiosClient.post("/auth/logout/"),
};


export default apiAuth;