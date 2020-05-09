import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import blue from "@material-ui/core/colors/blue";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
  section: {
    textAlign:'center',
    paddingTop: theme.spacing(6)
  },
  cardContainer: {
    display:'flex',
    flexDirection:'row',
    margin: '50px 0px'
  },
  card: {
    height: 250,
    width: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'left',
    borderRadius:'12px',
    border: 'solid 1px' + `${blue[100]}`,

  },
  cardContent: {
    padding: theme.spacing(2),
  },
}));


export default function History(props) {

  const { content } = props;
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Typography variant="h2" style={{margin:'75px 0px'}}>{content.title}</Typography>
        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
          {content.items.map((item, id, tags) =>
            <Grid item lg={12} sm={12} xs={12} justify="center" alignItems="center" style={{display:"flex"}}>
              <Card elevation={0} key={item.id} className={classes.card}>
                <CardContent>
                  <Typography variant="overline" color="textSecondary">{item.startDate} - {item.endDate} </Typography>
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">{item.jobTitle}</Typography>
                  {/*.tags.map((tag,j) => <div key={j}>{tag}</div>)*/}
                  <Chip style={{marginRight:'4px'}} color="primary" size="small" label={item.tags[0]}/>
                  <Chip style={{marginRight:'4px'}} color="primary" size="small" label={item.tags[1]}/>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
    </div>
  );
}