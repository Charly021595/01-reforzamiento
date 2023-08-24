import axios from "axios";

export const reqResApi = axios.create({ 
    //baseURL: 'https://reqres.in/api' 
    //baseURL: 'https://localhost:44377' 
    baseURL: 'http://172.20.28.162:82/EjemploConsulta.asmx' 
});