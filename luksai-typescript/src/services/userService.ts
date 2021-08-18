import apiService from "./apiService";

//AJUSTAR O PARAMETRO data PARA RECEBER OBJETO
const authenticate = (data: any) => {
    return apiService.post("/api/user/sign-in", data);
};

export default { authenticate };