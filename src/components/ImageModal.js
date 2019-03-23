import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import '../styles/index.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    overflowY: 'hidden !important'
  }
};

class ImageModal extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { classes, path, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {... other}>
        {
          (path ?
            <img src={require(`../images/raw/${path}` )} alt="dog" className={classes.image}/>
            :
            <div></div>
          )
        } 
      </Dialog>
    );
  }
}

ImageModal.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  path: PropTypes.string,
};

export default withStyles(styles)(ImageModal);