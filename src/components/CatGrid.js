import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

import { COLOR_HEX } from '../const';


const styles = theme => ({
  root: {
    display: 'inline-flex',
    flexGrow: 1,
    maxWidth: '320px',
  },
});

const paperStyle = {
  height: 80,
  width: 80,
}

function RenderCell({ cell, onClick }) {
  const cellStyles = {
    ...paperStyle,
    backgroundColor: COLOR_HEX[cell.color],
  };

  return (
    <Grid item>
      <Paper style={cellStyles} onClick={onClick} />
    </Grid>
  );
}

function RenderRow({ row, spacing, onCellSelect }) {
  return (
    <Grid
      container
      justify="center"
      spacing={Number(spacing)}
    >
      { row.map((cell, i) => <RenderCell key={i} cell={cell} onClick={onCellSelect.bind(null, i)} />) }
    </Grid>
  );
}

const CatGrid = ({ grid, classes, onCellSelect, spacing=8 }) => (
  <Grid container className={classes.root}>
    <Grid item xs={12}>

      { grid.map((row, i) => <RenderRow key={i} row={row} spacing={spacing} onCellSelect={onCellSelect.bind(null, i)} />) }

    </Grid>
  </Grid>
);


CatGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CatGrid);
