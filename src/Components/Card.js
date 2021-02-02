import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor:"rgb(185, 106, 106);"
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

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <b> name</b>{props.data.map(e=><div> {e.name}</div>)}
      <b> username</b>{props.data.map(e=><div> {e.username}</div>)}
      <b> website</b>{props.data.map(e=><div> {e.website}</div>)}
      <b> email</b> {props.data.map(e=><div> {e.email}</div>)}
    </Card>
  );
}
