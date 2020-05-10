import React from 'react';

import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

import { workContent as content} from './Content';





const useStyles = makeStyles((theme) => ({
  section: {
    textAlign:'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(16),
  },
  contentCard: {
    textAlign: 'left',
    borderRadius:'12px',
    border: `1px solid ${theme.palette.primary[100]}`,
    marginTop: theme.spacing(2),
  },
  textArea: {
    display: 'flex',
    flexDirection: 'column'
  },
  imageContainer:{
    height: 'auto',
    width: '100%',
    borderRadius: '12px'
  },
  avatar: {
    height: '4rem',
    width: '4rem',
    marginRight: theme.spacing(2)
  }

}));

export default function Work() {

  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.section}>
      <Typography component="h2" variant="h2" style={{margin:'75px 0px'}}>{content.title}</Typography>
      {content.items.map((item) =>
      <ExpansionPanel square elevation={0} className={classes.contentCard} key={item.id}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar className={classes.avatar} src={item.avatar}/>
          <div className={classes.textArea}>
            <Typography variant="overline" color="primary">{item.tags}</Typography>
            <Typography variant="h5">{item.projectName}</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            <Grid item lg={6} sm={12} md={6}>
              <img className={classes.imageContainer} src={item.image} alt={item.id}/>
            </Grid>
            <Grid item lg={6} sm={12} md={6}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {item.id}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                {item.description}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                {item.responsibilities}
              </Typography>
              <Link href={item.website}>{item.linkText}</Link>
            </Grid>
          </Grid>

        </ExpansionPanelDetails>
      </ExpansionPanel>
      )}

    </Container>
  );
}

