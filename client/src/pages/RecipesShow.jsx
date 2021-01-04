import React, { Component } from 'react';
import api from '../api';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/RecipesShowStyles';

class RecipesShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { classes } = this.props;


        return (
            <div className={classes.RecipesShow}>
                <h1>hi from show page...</h1>
            </div>
        );
    };
};

export default withStyles(styles)(RecipesShow);