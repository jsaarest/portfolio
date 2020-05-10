import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography";
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'space-between',
    padding: '10px 5% 10px 5%',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderTop: `1px solid ${theme.palette.primary[100]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarLink: {
    marginRight: theme.spacing(4),
    flexShrink: 0,
  },
}));

export default function Footer(props) {

  const classes = useStyles();
  const { content } = props;

  return (
      <Toolbar variant="dense" className={classes.toolbar}>
            <Typography variant="body2" color="textSecondary">{content.description}</Typography>
          <div id="menu">
            <Link href="https://github.com/jsaarest" className={classes.toolbarLink}>
              <GitHubIcon color="primary" fontSize="small" style={{marginRight:'7px'}}/>
              Github
            </Link>
            <Link href="https://dribbble.com/jsaarest" className={classes.toolbarLink}>Dribbble</Link>
          </div>
      </Toolbar>
  );
}

Footer.propTypes = {
  content: PropTypes.object,
};