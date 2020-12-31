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
            <div className={classes.Root}>
                <h3>this is the root component...</h3>
            </div>
        );
    };
};

export default withStyles(styles)(Root);