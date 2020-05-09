import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import image from './avatar-joona.png';

const useStyles = makeStyles((theme) => ({
  heroImageContainer: {
    width: '90wh',
    paddingBottom: theme.spacing(14),
    paddingTop: theme.spacing(14),
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary,
    marginBottom: theme.spacing(4),
    borderRadius: '0px',
 //   borderTop: `1px solid ${theme.palette.primary[100]}`,
    borderBottom: `1px solid ${theme.palette.primary[100]}`
  },
  heroContent: {
    position: 'relative',
    textAlign: 'center',
    width: '98vw',
  },
  title: {
    display:'flex',
    paddingLeft:'10vw',
    paddingRight: '10vw',
    textAlign:'center',
    alignContent:'middle',
  },
  avatar: {
    width: '140px',
    height: '140px',
    fontSize: '32pt',
    display:'inline-block',
    marginBottom: theme.spacing(6)
  },
  spacing: {
    marginTop: theme.spacing(6)
  },
  centerElement: {
    display:'flex',
    justifyContent: 'center'
  }
}));


export default function Hero(props) {

  const classes = useStyles();

  const { content } = props;

  return (
    <Paper elevation={0} className={classes.heroImageContainer}>
      <Grid container>
        <Grid item lg={12}>
          <div className={classes.heroContent}>
            <Avatar className={classes.avatar} src={image}/>
            <Typography component="h1" variant="h1" color="inherit" gutterBottom>
              {content.title}
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph style={{padding: '0vw 15vw'}}>
              {content.description}
            </Typography>
            <Button variant="outlined" color="primary" href="#contact" className={classes.spacing}>
              {content.linkText}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );


};