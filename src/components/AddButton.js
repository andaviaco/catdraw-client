import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
  button: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
});


const AddButton = ({ classes, onClick }) => (
  <Button
    fab
    color="primary"
    aria-label="add"
    className={classes.button}
    onClick={onClick}
  >
    <AddIcon />
  </Button>
);

AddButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButton);
