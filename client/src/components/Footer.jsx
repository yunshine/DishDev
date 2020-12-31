import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/FooterStyles';

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.FooterDiv}>
                <h3>hi footer connection test...</h3>
            </div>
        );
    };
};

export default withStyles(styles)(Footer);