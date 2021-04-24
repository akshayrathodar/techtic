import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    width:260,
    margin:16,

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const SimpleCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={props.webid} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Date : {props.date}
        </Typography>
        <Typography variant="h5" component="h2">
            Web Site Id :
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            {props.webid}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            Chats : {props.chats}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            Missed : {props.missed}
        </Typography>
      </CardContent>
    </Card>
    
  );
}

