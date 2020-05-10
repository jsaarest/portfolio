import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from '@material-ui/icons/MailOutline';



const useStyles = makeStyles((theme) => ({
  section: {
    textAlign:'center',
    height: '80vh',
    paddingTop: theme.spacing(16)
  }
}));



export default function Contact(props) {

  const { content } = props;
  const classes = useStyles();

  function openEmail(){
    window.location.href = `mailto:${content.email}`;
  }

  return (
    <div className={classes.section} id="contact">
      <Typography variant="h2" style={{marginTop:'75px'}} gutterBottom>{content.title}</Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom paragraph>{content.description}</Typography>
      <Button onClick={openEmail} color="primary" variant="outlined" startIcon={<MailOutlineIcon />}>Send email</Button>
    </div>

  )
}