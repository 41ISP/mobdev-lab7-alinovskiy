import axios from "axios"

const messageAxios = axios.create({
    baseURL: "https://ws-chat.omsktec-playgrounds-1.ru/"
}) 

const message = {
  
    logReq: async (id: string) => {
        const respone = await messageAxios.post('/login',{
                id

        })
        return respone
    },
    msgReq : async (id: string) => {
        const respone = await messageAxios.get('/messages/' +id , {
            withCredentials: false,
        })
        return respone 
    }
}
export default message