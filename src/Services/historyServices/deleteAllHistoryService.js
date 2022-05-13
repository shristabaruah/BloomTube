import axios from "axios"

const deleteHistoryService = (token)=>{
    return axios.delete("/api/user/history/all" , {headers:{authorization:token}});
};

export{ deleteHistoryService }