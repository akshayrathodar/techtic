import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import Main from '../Components/main';

class Router extends React.Component{
    render(){
        return(
            <>
                <BrowserRouter basename="/">
                    <Switch>
                        <Route exact path="/" component={Main}></Route>

                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

export default Router;
