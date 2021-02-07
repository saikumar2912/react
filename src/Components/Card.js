import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    minWidth: 75,
    backgroundColor:"bisque",
    marginRight:750
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
export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    
    <Card className={classes.root} variant="outlined">
      {props.load == false ? props.data.map(e => <><p>{e.name}</p></>):props.data.map(e => <><p><b>Name: </b>{e.name}</p>
    <p><b>PhoneNumber: </b>{e.phone}</p>
    <p><b>UserName: </b>{e.username}</p>
    <p><b>WebSite: </b>{e.website}</p>
    <p><b>MailId: </b>{e.email}</p>
    <p><b>Address:</b>
          <p><b>(Street: </b>{e.address.street}
           <b>, Suite: </b>{e.address.suite}
          <b>, City: </b>{e.address.city}
          <b>, ZipCode: </b>{e.address.zipcode}<b>)</b></p></p>
    <p><b>CompanyName: </b>{e.company.name}</p>
    </> )}
    </Card>
    
    );
}