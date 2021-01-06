import React, { Component } from 'react';
import api from '../api';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/RecipeShowStyles';

class RecipeShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            id: this.props.match.params.id,
            recipe: { ingredients: '' },
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
        // this.setState()
    };

    render() {
        const { classes } = this.props;
        const { name, images, description, ingredients, directions } = this.state.recipe;

        const newIngredients = ingredients.split(", ");


        return (
            <div className={classes.RecipeShow}>
                <div className={classes.RecipeShowTop}>
                    <div className={classes.RecipeShowTopLeft}>
                        <img src={images} className={classes.RecipeShowCardImage} alt="" />
                    </div>

                    <div className={classes.RecipeShowTopRight}>
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                </div>

                <div className={classes.RecipeShowBottom}>
                    <div className={classes.RecipeShowBottomLeft}>
                        <h3>Ingredients</h3>
                        <p>{ingredients}</p>
                        <p>{newIngredients}</p>



                        {/* <ul>
                            {newIngredients.map(ingredient => {
                                <li>ingredient</li>
                            })}
                        </ul> */}

                    </div>
                    <div className={classes.RecipeShowBottomRight}>
                        <h3>Directions</h3>
                        <p>{directions}</p>
                    </div>
                </div>
            </div>
        );
    };
};

export default withStyles(styles)(RecipeShow);