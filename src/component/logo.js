import React from 'react';
import {useStyles} from '../styles';

function Logo(props) {
    const styles = useStyles();
    return (
        <img 
            src="/images/kiosk-logo.png" 
            alt="kiosk logo" 
            className={props.large?styles.largeLogo : styles.logo}>
        </img>
    )
}

export default Logo;