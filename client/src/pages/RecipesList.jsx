import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/RecipesListStyles';

class UpdateRecipe extends Component {
    updateRecipe = event => {
        event.preventDefault();
        window.location.href = `/recipes/update/${this.props.id}`;
    };

    render() {
        // return <Update onClick={this.updateRecipe}>Update Recipe</Update>
        return <a className={this.props.className} onClick={this.updateRecipe}>Update This Recipe</a>
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
        return <a className={this.props.className} onClick={this.deleteRecipe}>Delete This Recipe</a>
    };
};

class RecipesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });

        await api.getAllRecipes().then(recipes => {
            this.setState({
                recipes: recipes.data.data,
                isLoading: false,
            })
        })
    };

    render() {
        const { recipes, isLoading } = this.state;
        const { classes } = this.props;
        console.log('TCL: RecipesList -> render -> recipes', recipes)
        console.log("Loading? ", this.state.isLoading)

        let testText = <p>testText...</p>;
        if (recipes.length) {
            testText = <h4>Great! Some recipes exist...</h4>;
        } else {
            testText = <h4>!!!Oh NO!!! ERROR!!! There are no recipes!!!</h4>;
        };

        return (
            <div className={classes.RecipesList}>
                {/* <h3>In this page you'll see the list of recipes</h3>
                {testText}
                <br />
                <hr /> */}
                {recipes.map(recipe => (
                    <div className={classes.RecipesListCard}>
                        <img src={recipe.images} className={classes.RecipesListCardImage} />
                        <div className={classes.RecipesListCardText}>
                            <h3 className={classes.RecipesListCardName}>{recipe.name}</h3>
                            <h2 className={classes.RecipesListCardDescription}>{recipe.description.substring(0, Math.min(recipe.description.length, 85))}...</h2>
                            {/* <p>{recipe.ingredients}</p> */}
                            {/* <p>{recipe.directions}</p> */}

                            <br />
                            <DeleteRecipe id={recipe._id} name={recipe.name} className={classes.IndexDeleteRecipeButton} /><span> | </span>
                            <UpdateRecipe id={recipe._id} className={this.props.classes.IndexUpdateRecipeButton} /><span> | </span>
                            <Link to={recipe._id} className={classes.IndexShowRecipeButton}>See This Recipe</Link>
                        </div>
                    </div>
                ))
                }
            </div>
        );
    };
};

export default withStyles(styles)(RecipesList);