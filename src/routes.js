import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Produto from './views/components/Produto/Produto';
import Cliente from './views/components/Cliente/Cliente';
import Home from './views/components/Home/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/produto" component={Produto}></Route>
                <Route path="/cliente" component={Cliente}></Route>
            </Switch>
        </BrowserRouter>
    )
}