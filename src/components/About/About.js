import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  section: {
    textAlign:'center',
    paddingTop: theme.spacing(6)
  },
  cardContainer: {
    display:'flex',
    flexDirection:'row',
    //margin: '50px 0px'
  },
  card: {
    height: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'left',
    borderRadius:'12px',
    border: `1px solid ${theme.palette.primary[100]}`,
    padding: theme.spacing(2),

  }
}));

export default function About(props) {

  const classes = useStyles();
  const { content } = props;

  return (
    <div className={classes.section}>
      <Typography variant="h2" component="h2" style={{margin:'75px 0px'}}>{content.title}</Typography>
      <Grid container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center">
        {content.items.map((item, id) =>
          <Grid item lg={4} sm={6} xs={12} key={item.id}>
            <Card elevation={0} className={classes.card}>
              <CardContent>
                {item.icon}
                <Typography variant='h5'>{item.name}</Typography>
                <Typography variant='overline' color="textSecondary">{item.projects} Projects</Typography>

              </CardContent>
              <CardActions>
                <Button color="primary" variant="outlined" size="small" component={RouterLink} to={item.route}>View</Button>
              </CardActions>
            </Card>
          </Grid>
          )
        }
      </Grid>

    </div>
  );
}

About.propTypes = {
  title: PropTypes.string,
};