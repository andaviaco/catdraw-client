import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import { COLOR_HEX } from '../const';


const paperStyle = {
  height: 10,
  width: 10,
}

function RenderCell({ cell }) {
  const cellStyles = {
    ...paperStyle,
    backgroundColor: COLOR_HEX[cell.color],
  };

  return (
    <Grid item>
      <Paper style={cellStyles} />
    </Grid>
  );
}

function RenderRow({ row }) {
  return (
    <Grid
      container
      justify="center"
      spacing={0}
    >
      { row.map((cell, i) => <RenderCell key={i} cell={cell} />) }
    </Grid>
  );
}

const FigurePreview = ({ figure }) => (
  <div>
    { figure.map((row, i) => <RenderRow key={i} row={row} />) }
  </div>
);

export default FigurePreview;
