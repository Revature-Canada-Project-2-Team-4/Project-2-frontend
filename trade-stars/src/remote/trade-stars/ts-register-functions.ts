import {tradeStarApi} from ".";

export const createNewTradesmen = async (firstName:string, lastName:string, username:string, password:string) =>{

    let newTradesmen = {
            firstName,
            lastName,
            username,
            password,
            userRole: {
                roleId: 2
            }
    }

    console.log(newTradesmen)
    try{

        let res = await tradeStarApi.post('/users', newTradesmen);
        console.log(res.data);
        return res.data;
    }catch(e) {
        console.log(e);
        if(e.response){
            throw new Error(e.response.data);
        } else {
            throw new Error("Oops something went wrong")
        }
    }

 }