import React, { Component } from 'react';
import api from '../api';

import styled from 'styled-components';

class RecipesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllRecipes().then(recipes => {
            this.setState({
                recipes: recipes.data.data,
                isLoading: false,
            })
        })
    };

    render() {
        const { recipes, isLoading } = this.state
        console.log('TCL: RecipesList -> render -> recipes', recipes)
        console.log("Loading? ", this.state.isLoading)

        let testText = <p>testText...</p>;
        if (recipes.length) {
            testText = <p>Great! Some recipes exist...</p>;
        } else {
            testText = <h4>!!!Oh NO!!! ERROR!!! There are no recipes!!!</h4>;
        };

        return (
            <div>
                <p>In this page you'll see the list of recipes</p>
                {testText}
                {recipes.map(recipe => (
                    <>
                        <p>{recipe.name}</p>
                        <p>{recipe.images}</p>
                        <p>{recipe.ingredients}</p>
                        <p>{recipe.directions}</p>
                    </>
                ))}
            </div>
        );
    };
};

export default RecipesList;
