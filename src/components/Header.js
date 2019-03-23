import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import logo from '../images/logo.png';
import '../styles/index.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    color: '#FFF',
    marginLeft: '15px',
    marginTop: '12px',
    fontSize: '2em',
  },
  bar: {
    minHeight: '80px',
    background: '#fdd835',
  },
  button: {
    float: 'right',
  },
  logo: {
    height: '50px',
  },
  link: {
    paddingRight: '40px',
    cursor: 'not-allowed',
    float: 'right',
    marginTop: '10px',
  }
};

class Header extends React.Component {
  render() {
    const { classes } = this.props;
  
    return (
      <div className={classes.root}>
        <Grid container spacing={40}>
          <AppBar position="static">
            <Toolbar className={classes.bar}>
              <Grid item xs={6}>
                <Typography variant="h6" className={classes.title}>
                  <img src={logo} alt="logo" className={classes.logo} align="top" hspace="20"/>
                  Fur Ever Friends
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Link color="inherit" className={classes.link}>
                  Home
                </Link>
                <Link color="inherit" className={classes.link}>
                  About Us
                </Link>
                <Link color="inherit" className={classes.link}>
                  Gallery
                </Link>
                <Link color="inherit" className={classes.link}>
                  Contact
                </Link>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>   
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);