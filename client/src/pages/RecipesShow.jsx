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


        return (
            <div className={classes.RecipesShow}>
                <h1>hi from show page...</h1>
                <h1>{this.state.recipe.name} name here...;</h1>

            </div>
        );
    };
};

export default withStyles(styles)(RecipesShow);