import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { GetCharacterDetails } from "../Action/SingleDataAction"
import './SingleCharacter.css'

function SingleCharacter() {
    const dispatch = useDispatch();
    const carddetails = useSelector(state => state.Sigle_card)
    const location = useLocation();

    useEffect(() => {
        const id = location.search.split('=')[1];

        dispatch(GetCharacterDetails(id));
        // eslint-disable-next-line
    }, []);

    return (
        <div className="S-C-section">
            <div className="S-C-Wrapper2">
                {carddetails && (
                    <div className="S-C-section">
                        <div className="image">
                            <img className="image_1" src={carddetails.image} alt="alt-img" />
                        </div>
                        <div className="contentsection">
                            <div className="label1">
                                <label>Name:</label>
                                <p>{carddetails.name}</p>
                            </div>
                            <div className="label1">
                                <label>Status:</label>
                                <p className={`status-${carddetails.status === "Alive" ? 'alive' : carddetails.status === "Dead" ? 'dead' : "unknown"}`} >{carddetails.status}</p>
                            </div>
                            <div className="label1">
                                <label>Species</label>
                                <p>{carddetails.species}</p>
                            </div>
                            <div className="label1">
                                <label>Gender:</label>
                                <p>{carddetails.gender}</p>
                            </div>
                            <div className="label1">
                                <label>Id:</label>
                                <p>{carddetails.id}</p>
                            </div>
                            <Link to='/'><button>Go To home page</button></Link>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}
export default SingleCharacter
