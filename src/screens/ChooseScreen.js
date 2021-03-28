import React, { useContext } from 'react';

import { Box, Card, CardActionArea, CardContent, CardMedia, Fade, Typography } from '@material-ui/core';

import { setOrderType } from '../actions';
import Logo from '../component/logo';
import { Store } from '../Store';
import { useStyles } from '../styles';


export default function ChooseScreen(props) {
    const { dispatch } = useContext(Store);
    const styles = useStyles();

    const chooseHandler = (orderType) => {
        setOrderType(dispatch, orderType);
        props.history.push('/order');
    };
    return (
        <Fade in={true}>
           <Box className={[styles.root, styles.navy]}>
                <Box className={[styles.main, styles.center]}>
                    <Logo large></Logo>
                    <Typography component="h3" variant="h3" className=
                    {styles.center} gutterBottom>
                        A donde quieres comer?
                    </Typography>
                    <Box className={[styles.cards]}>
                        <Card className={[styles.card, styles.space]}>
                            <CardActionArea onClick={()=> chooseHandler('Comer acá')}>
                                <CardMedia
                                    component="img"
                                    alt="Acá"
                                    image="/images/kiosk-logo.png"
                                    className={styles.media}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h4"
                                        color="textPrimary"
                                        component="p"
                                    >
                                        Comer acá
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={[styles.card, styles.space]}>
                            <CardActionArea onClick={()=> chooseHandler('Para llevar')}>
                                <CardMedia
                                    component="img"
                                    alt="Acá"
                                    image="/images/kiosk-logo.png"
                                    className={styles.media}
                                />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h4"
                                    color="textPrimary"
                                    component="p"
                                >
                                    Para llevar
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Box>
           </Box> 
        </Fade>
    )
}


