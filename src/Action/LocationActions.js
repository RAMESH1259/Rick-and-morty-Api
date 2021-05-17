import {Show_Locations} from './types'
import axios from 'axios'

export const GetLoction=()=>async (dispatch)=>
{
    const data1 = await axios.get('https://rickandmortyapi.com/api/location');
    const data2 = await axios.get('https://rickandmortyapi.com/api/location/?page=2');
    const data3 = await axios.get('https://rickandmortyapi.com/api/location/?page=3');
    const data4 = await axios.get('https://rickandmortyapi.com/api/location/?page=4');
    const data5 = await axios.get('https://rickandmortyapi.com/api/location/?page=5');
    const data6 = await axios.get('https://rickandmortyapi.com/api/location/?page=6');
    let arr = [ ...data1.data.results, ...data2.data.results, ...data3.data.results, ...data4.data.results, ...data5.data.results, ...data6.data.results ]

    dispatch({
        type:Show_Locations,
        payload: arr
    });
    
}
