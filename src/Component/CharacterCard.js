import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Get_character } from '../Redux/Action/CharacterAction';
import "../theme/CharacterCard.css"

const CharacterCard = (props) => {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const result = await dispatch(Get_character(props.url));
            setData(result)
        })()
        // eslint-disable-next-line
    }, []);

    const handleSelect = (result) => {
        history.push(`/single_Card?id=${result}`)
    }
    return (
        <div className='Wrapper2 ' onClick={() => handleSelect(data.id)}>
            <div className="image">
                <img className="image_1" src={data.image} alt="alt-img" />
            </div>
            <div className="contentsection">
                <div className="label1">
                    <label>Name:</label>
                    <p>{data.name}</p>
                </div>
                <div className="label1">
                    <label>Status:</label>
                    <p className={`status-${data.status === "Alive" ? 'alive' : data.status === "Dead" ? 'dead' : "unknown"}`}>{data.status}</p>
                </div>
                <div className="label1">
                    <label>Species:</label>
                    <p>{data.species}</p>
                </div>
                <div className="label1">
                    <label>Gender:</label>
                    <p>{data.gender}</p>
                </div>
            </div>
        </div>
    )
}
export default CharacterCard;
