import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from '@material-ui/core/Chip';
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles((theme) => ({
  section: {
    textAlign:'center',
    paddingTop: theme.spacing(6)
  },
  cardContainer: {
    display:'flex',
    justifyContent:'center'
  },
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'left',
    borderRadius:'12px',
    border: `1px solid ${theme.palette.primary[100]}`,

  },
  cardContent: {
    padding: theme.spacing(2),
  },
  avatar: {
    height: 'auto',
    width: '100px',
    marginLeft: theme.spacing(2)
  }
}));


export default function History(props) {

  const { content } = props;
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Typography variant="h2" style={{margin:'75px 0px'}}>{content.title}</Typography>
        <Grid container spacing={3} direction="row" justify="center">
          {content.items.map((item, id, tags) =>
            <Grid item lg={12} md={12} xs={12}  key={item.id} className={classes.cardContainer}>
              <Card elevation={0} className={classes.card}>
                <Grid container spacing={3} alignItems="center">
                <Grid item>
                  <Avatar className={classes.avatar} src={item.avatar}/>
                </Grid>
                <Grid item>
                <CardContent>
                  <Typography variant="overline" color="textSecondary">{item.startDate} - {item.endDate} </Typography>
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">{item.jobTitle}</Typography>
                  {/*.tags.map((tag,j) => <div key={j}>{tag}</div>)*/}
                  <Chip style={{marginRight:'4px'}} color="primary" size="small" label={item.tags[0]}/>
                  <Chip style={{marginRight:'4px'}} color="primary" size="small" label={item.tags[1]}/>
                </CardContent>
                </Grid>
                </Grid>
              </Card>
            </Grid>
          )}
        </Grid>
    </div>
  );
}