import axios from 'axios';

export const GetCharacterDetails = (value) => async(dispatch)=>
{
    const data =await axios.get(`https://rickandmortyapi.com/api/character/${value}`); 
    dispatch  ({ type: "GET_CHARACTER_DETAILS",
        payload: data.data
    })
}
