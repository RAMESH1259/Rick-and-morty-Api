
import axios from 'axios'

export const Get_character = (url)=> async()=>
{
    const data = await axios.get(url);
    return data.data
}
