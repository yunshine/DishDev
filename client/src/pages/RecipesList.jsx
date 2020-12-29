import React, { Component } from 'react';
import api from '../api';
import styled from 'styled-components';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/RecipesListStyles';

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateRecipe extends Component {
    updateRecipe = event => {
        event.preventDefault();
        window.location.href = `/recipes/update/${this.props.id}`;
    };

    render() {
        return <Update onClick={this.updateRecipe}>Update Recipe</Update>
    };
};

class DeleteRecipe extends Component {
    deleteRecipe = event => {
        event.preventDefault();
        if (
            window.confirm(
                `Are you sure you want to delete ${this.props.name}?`,
            )
        ) {
            api.deleteRecipeById(this.props.id);
            window.location.reload();
        }
    };

    render() {
        return <Delete onClick={this.deleteRecipe}>Delete</Delete>
    };
};

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
            testText = <h4>Great! Some recipes exist...</h4>;
        } else {
            testText = <h4>!!!Oh NO!!! ERROR!!! There are no recipes!!!</h4>;
        };

        return (
            <div>
                <br />
                <h3>In this page you'll see the list of recipes</h3>
                {testText}
                <br />
                <hr />
                {recipes.map(recipe => (
                    <>
                        <h3>{recipe.name}</h3>
                        <p>{recipe.images}</p>
                        <p>{recipe.ingredients}</p>
                        <p>{recipe.directions}</p>
                        <DeleteRecipe id={recipe._id} />
                        <UpdateRecipe id={recipe._id} />
                        <br></br>
                        <hr></hr>
                    </>
                ))}
            </div>
        );
    };
};

export default withStyles(styles)(RecipesList);
