import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/RootStyles';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { classes } = this.props;
        return (
            // <div className={classes.RootPage}>
            <div className={classes.RootJumbotron}>
                <div className={classes.RootText}>
                    <h1>DishDev</h1>
                    <p>Share your <strong>best</strong> Instant Pot recipes!</p>
                    <Link to="/recipes/list" className={classes.RootBannerButton}>See All Recipes</Link>
                </div>
            </div>
            // </div>
        );
    };
};

export default withStyles(styles)(Root);