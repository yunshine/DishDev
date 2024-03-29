import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar, Footer } from '../components';
import { Root, RecipesList, RecipesCreate, RecipesUpdate, RecipeShow, Registration, Message } from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Root} />
                <Route path="/recipes/list" exact component={RecipesList} />
                <Route path="/recipes/create" exact component={RecipesCreate} />
                <Route path="/recipes/update/:id" exact component={RecipesUpdate} />
                <Route path="/recipes/:id" exact component={RecipeShow} />
                <Route path="/users/register" exact component={Registration} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
