import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import { COLOR_HEX } from '../const';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    height: '36px',
    minWidth: '36px',
    width: '36px',
  },
  buttonGreen: {
    background: COLOR_HEX.green,

    '&:hover': {
      background: COLOR_HEX.greenDark,
    }
  },
  buttonRed: {
    background: COLOR_HEX.red,

    '&:hover': {
      background: COLOR_HEX.redDark,
    }
  },
  toolbar: {
    justifyContent: 'flex-end',
  }
});


const ToolBar = ({ onColorSelect, classes }) => (
  <Toolbar className={classes.toolbar}>
    <Button
      className={`${classes.button} ${classes.buttonGreen}`}
      onClick={() => onColorSelect('green')}
    >
      <span></span>
    </Button>

    <Button
      className={`${classes.button} ${classes.buttonRed}`}
      onClick={() => onColorSelect('red')}
    >
      <span></span>
    </Button>
  </Toolbar>
);

ToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolBar);
