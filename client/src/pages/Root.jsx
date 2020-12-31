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
            <div className={classes.Root}>
                {/* <div class="banner" style="background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://res.cloudinary.com/deyqjsowe/image/upload/v1609385709/Instant%20Pot%20Recipes/InstantPotBanner_gz2qqs.jpg);"> */}
                <div className={classes.RootText}>
                    <h1>Instant Pot Recipes</h1>
                    <p>Share your <strong>best</strong> Instant Pot recipes!</p>
                    {/* <a class="btn btn-flat" href="#">Apply now</a> */}
                    <Link to="/recipes/list" className={classes.RootBannerButton}>See All Recipe</Link>
                </div>
            </div>
        );
    };
};

export default withStyles(styles)(Root);