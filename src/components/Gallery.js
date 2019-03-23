import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ImageModal from './ImageModal';
import DATA from '../data/dogs';
import '../styles/index.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  dogImages: {
    width: '300px',
  }
};

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      openModal: false
    };
  }
  componentWillMount = () => {
    this.setState({ dogs: DATA.dogs })
  }

  triggerModal = (path) => {
    this.setState({ openModal: true, path: path })
  }

  handleClose = () => {
    this.setState({ openModal: false, path: null });
  };

  render() {
    const { dogs, openModal, path } = this.state;
    const { classes } = this.props;
  
    return (
      <div className={classes.root}>
        <h1>Adoption Gallery</h1>
        <section id="photos">
          {
            dogs.map((dog) => {
              return <img key={dog.source} src={require(`../images/raw/${dog.image}` )} alt="dog" className={classes.dogImages} onClick={() => this.triggerModal(dog.image)}/>
            })
          }
        </section>
          <ImageModal 
            open={openModal}
            path={path}
            onClose={this.handleClose} />
      </div>
    );
  }
}

Gallery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gallery);