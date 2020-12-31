import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/RootStyles';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render() {
        const { classes } = this.props;
        return (
            <div class="banner">
                {/* <div class="banner" style="background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://res.cloudinary.com/deyqjsowe/image/upload/v1609385709/Instant%20Pot%20Recipes/InstantPotBanner_gz2qqs.jpg);"> */}
                <div class="container">
                    <h1>Le Wagon brings <strong>tech skills</strong> to <strong>creative people</strong>!</h1>
                    <p>Change your life and learn to code at one of our campuses around the world.</p>
                    {/* <a class="btn btn-flat" href="#">Apply now</a> */}
                </div>
            </div>
        );
    };
};

export default withStyles(styles)(Root);