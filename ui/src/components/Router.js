import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import App from "../App";
import Recipe from './Recipe';



const Router = () => (
    <BrowserRouter>
        <Switch>


            <Route path="/" exact render={() => <Redirect to="recipes" />} />

            <Route path="/recipes/:id" component={Recipe} />
            <Route path="/recipes" component={App} exact />

        </Switch>



    </BrowserRouter>

);
export default Router