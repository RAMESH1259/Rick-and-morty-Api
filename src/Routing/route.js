import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from '../Component/Home'
import All_card from '../Component/CharacterCard'
import single_Card from '../Component/SingleCharacter'

function route() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/All_card' component={All_card} />
                    <Route exact path='/single_Card' component={single_Card} />
                </Switch>
            </BrowserRouter> 

        </div>
    )
}

export default route
