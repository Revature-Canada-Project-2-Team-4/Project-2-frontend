import {tradeStarApi} from '.';

export const getAllTradeServices = async () => {
    try {
        let res = await tradeStarApi.get('/auth');
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