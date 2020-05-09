import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import logo from '../../logo.svg';
import { Link as RouterLink } from 'react-router-dom';
import '../../App.css';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'space-between',
    padding: '10px 5% 10px 5%',
    borderBottom: `1px solid ${theme.palette.primary[100]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarLink: {
    marginRight: theme.spacing(4),
    flexShrink: 0,
  },
}));

export default function Header(props) {

  const classes = useStyles();
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar variant="dense" className={classes.toolbar}>
        <a href="/">
          <img src={logo} component={RouterLink} to='/' width="30px"/>
        </a>

        <div id="menu" style={{margin:'0px 25px'}}>
          <Link component={RouterLink} to='/' className={classes.toolbarLink}>Home</Link>
          <Link component={RouterLink} to='/work' className={classes.toolbarLink}>Projects</Link>
          <Button variant="outlined" color="primary" href="#contact" className={classes.toolbarLink}>Contact</Button>
        </div>


      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};