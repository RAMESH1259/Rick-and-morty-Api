import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetLoction } from '../Action/LocationActions';
import { Get_All_character } from '../Action/Get-Char-action'
import CharacterCard from './CharacterCard';
import './Home.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
var flag = false;
function Character() {
    const dispatch = useDispatch();
    const Locationstate = useSelector(state => state.LocationData)
    const Whole_character = useSelector(state => state.Whole_character)

    useEffect(() => {
        dispatch(GetLoction());
        dispatch(Get_All_character())
        // eslint-disable-next-line
    }, []);
    const handleChange = (value) => {
        if (value) {
            dispatch(Get_All_character(value))
        }
    }

    return (
        <div className='Wrapper1'>
            <div className="Select">
                <select class="form-select" aria-label="Default select example" onChange={e => handleChange(e.target.value)}>
                    <option>Select your Location</option>
                    {
                        Locationstate.map((item, i) => (
                            <option value={item.id} key={i}>{item.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="super-div">
                {
                    (Whole_character && Whole_character.length) ? Whole_character.map((url, i) => (
                        <div className="charactercard1" key={i}>
                            <CharacterCard url={url} />
                            {flag = true}
                        </div>
                    )) : 
                    <div className="front-message"> 
                        <h2>Rick and Morty</h2>
                        {/* <img src={rick} alt="rick and morty"/> */}
                        <p className="no-character">{flag?"No character Found": "Please select a location"}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Character

