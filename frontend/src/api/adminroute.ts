import axiosClient from "./axiosClient";

const adminRouteApi = {
    getAllRoutes: () => axiosClient.get("/admin/routes/"),
}


export default adminRouteApi;