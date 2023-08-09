import axios from 'axios';
import config from '../apiConfig';
export const submitFormData=(payload)=>{
    axios.post(`${config.apiUrl}/submit`, payload).then((res)=>{
        return res.data
    }).catch((err)=>{
        return err
    })
}
