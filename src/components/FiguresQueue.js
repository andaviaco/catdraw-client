import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

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

FiguresQueue.propTypes = {
  figures: PropTypes.array,
};

export default FiguresQueue;
