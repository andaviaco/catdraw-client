import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import FigurePreview from './FigurePreview';


const FiguresQueue = ({ figures }) => (
  <Grid container>
    {figures.map((figure, i) => (
      <Grid
        key={i}
        item
        xs={2}
      >
        <FigurePreview figure={figure} />
      </Grid>
    ))}
  </Grid>
);


export default FiguresQueue;
