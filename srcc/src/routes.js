import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Articles from "./Components/pages/Articles";
import AboutUs from './Components/pages/AboutUs';
import ArticlePage from './Components/pages/ArticlePage';
import add from './Components/Add/Add';


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/articles" exact component={Articles} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/article/:id" exact component={ArticlePage} />
            <Route path="/add/" exact component={add} />

        </Switch>
    )
}
export default Routes;
