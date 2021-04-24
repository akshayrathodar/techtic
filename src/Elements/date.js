import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    marginTop:theme.spacing(5),
    marginBottom:theme.spacing(5),
    width: 200,
  },
}));

export const DatePickers = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label={props.label}
        type="date"
        name={props.name}
        defaultValue=""
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={props.onchangeEvent}
      />
    </form>
  );
}