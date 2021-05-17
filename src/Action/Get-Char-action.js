import { Card_details } from './types'
import axios from 'axios'
export const Get_All_character = (value) => async (dispatch) => {
    const data = await axios.get(`https://rickandmortyapi.com/api/location/${value}`);
    dispatch({
        type: Card_details,
        payload: data.data.residents
    })
}
