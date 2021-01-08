import axios from 'axios'

//this is where we config every single request for a certain api
export const  tradeStarApi = axios.create({
    //You might need to add project name at end of url
    baseURL:"http://localhost:8080/",
    headers:{
        'Content-Type': "application/json"
    }
})
