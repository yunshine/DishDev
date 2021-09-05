import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { withStyles } from '@material-ui/styles';
import recipeShowStyles from '../styles/RecipeShowStyles';

class DeleteRecipe extends Component {
    deleteRecipe = event => {
        event.preventDefault();
        if (
            window.confirm(
                `Are you sure you want to delete ${this.props.name}?`,
            )
        ) {
            api.deleteRecipeById(this.props.id);
            window.location.href = '/recipes/list';
        }
    };
    render() {
        return <a className={this.props.className} onClick={this.deleteRecipe}>Delete Recipe</a>
    };
};

class RecipeShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            id: this.props.match.params.id,
            recipe: { ingredients: '', directions: '', },
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });

        await api.getRecipeById(this.state.id).then(recipe => {
            this.setState({
                recipe: recipe.data.data,
                isLoading: false,
            })
        })
    };

    render() {
        const { classes } = this.props;
        const { name, images, description, ingredients, directions } = this.state.recipe;
        const linkToUpdate = `update/${this.state.recipe._id}`;

        return (
            <div className={classes.RecipeShow}>
                <div className={classes.RecipeShowTop}>
                    <div className={classes.RecipeShowTopLeft}>
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <Link to={linkToUpdate} className={classes.ShowPageUpdateButton}>Update Recipe</Link>
                        {/* <DeleteRecipe id={this.state.id} name={name} className={classes.ShowPageDeleteButton} /> */}
                        <a className={classes.ShowPageUpdateButton} onClick={() => alert("Sorry. Only the admin has permission to do that.")}>Update</a>
                        <a className={classes.ShowPageUpdateButton} onClick={() => alert("Sorry. Only the admin has permission to do that.")} style={{ backgroundColor: "rgba(255,64,80, 1)" }}>Delete</a>
                    </div>

                    <div className={classes.RecipeShowTopRight}>
                        <img src={images} className={classes.RecipeShowCardImage} alt="" />
                    </div>
                </div>

                <hr></hr>


                <div className={classes.RecipeShowBottom}>
                    <div className={classes.RecipeShowBottomLeft}>
                        <h2>Ingredients</h2>
                        <ul>
                            {ingredients.split(', ').map(ingredient => (
                                <li>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <hr className={classes.RecipeShowBottomHR}></hr>

                    <div className={classes.RecipeShowBottomRight}>
                        <h2>Directions</h2>
                        <ol>
                            {directions.split('. ').map(step => (
                                <li>{step}.</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        );
    };
};

export default withStyles(recipeShowStyles)(RecipeShow);
