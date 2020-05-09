import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import blue from '@material-ui/core/colors/blue';
import logo from '../../logo.svg';
import Typography from "@material-ui/core/Typography";
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingTop: '10px',
    paddingBottom: '10px',
    borderTop: `1px solid ${theme.palette.primary[100]}`,
  },
  container: {
    marginLeft: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
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
        <Container maxWidth="lg" className={classes.container}>
            <Typography variant="p" color="textSecondary">{content.description}</Typography>
          <div id="menu">
            <Link href="https://github.com/jsaarest" className={classes.toolbarLink}>
              <GitHubIcon color="primary" fontSize="small" style={{marginRight:'7px'}}/>
              Github
            </Link>
            <Link href="https://dribbble.com/jsaarest" className={classes.toolbarLink}>Dribbble</Link>
          </div>
        </Container>
      </Toolbar>
  );
}

Footer.propTypes = {
  title: PropTypes.string,
};