import axios from 'axios'

//this is where we config every single request for a certain api
export const  tradeStarApi = axios.create({
    //You might need to add project name at end of url
    baseURL:"http://ec2-54-175-141-33.compute-1.amazonaws.com:10000/",
    headers:{
        'Content-Type': "application/json"
    }
})
