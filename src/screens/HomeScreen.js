import React from 'react';
import { Box, Card, CardActionArea, Typography } from '@material-ui/core';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import {useStyles} from '../styles';
import Logo from '../component/logo';


function HomeScreen(props) {
    const styles = useStyles();
    return (
        <Card>
            <CardActionArea onClick={() => props.history.push('/choose')}>
                <Box className={[styles.root, styles.red]}>
                    <Box className={[styles.main, styles.center]}>
                        <Typography component="h6" variant="h6">
                            Rápido & Fácil
                        </Typography>                        
                        <Typography component="h1" variant="h1">
                            Ordena <br /> & paga <br /> acá
                        </Typography>
                        <TouchAppIcon fontsize="large"></TouchAppIcon>
                    </Box>
                    <Box className={[styles.center, styles.green]}>
                        <Logo large></Logo>
                        <Typography component="h5" variant="h5">
                            Toca para empezar
                        </Typography>
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default HomeScreen
