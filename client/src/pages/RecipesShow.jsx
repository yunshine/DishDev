import React, { Component } from 'react';
import api from '../api';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/RecipesShowStyles';

class RecipesShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            id: this.props.match.params.id,
            recipe: {},
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


        return (
            <div className={classes.RecipesShow}>
                <h1>hi from show page...</h1>
                <img src={images} alt="" />
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{ingredients}</p>
                <p>{directions}</p>

            </div>
        );
    };
};

export default withStyles(styles)(RecipesShow);