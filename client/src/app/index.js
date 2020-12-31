import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar, Footer } from '../components';
import { RecipesList, RecipesCreate, RecipesUpdate } from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/recipes/list" exact component={RecipesList} />
                <Route path="/recipes/create" exact component={RecipesCreate} />
                <Route
                    path="/recipes/update/:id"
                    exact
                    component={RecipesUpdate}
                />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
