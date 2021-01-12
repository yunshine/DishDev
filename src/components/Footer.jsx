import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/FooterStyles';

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.Footer}>
                <div className={classes.FooterLeft}>
                    <p>© 2021 Yun Chung. All rights reserved.</p>
                </div>
                <div className={classes.FooterRight}>
                    <a className='' href={'mailto:yun.chung@mac.com'}>
                        <i class='far fa-envelope'> Email Me</i>
                    </a>
                    <a className='' href='https://www.linkedin.com/in/yunchungdev/' target="_blank">
                        <i class='fab fa-linkedin'> LinkedIn</i>
                    </a>
                </div>
            </div>
        );
    };
};

export default withStyles(styles)(Footer);