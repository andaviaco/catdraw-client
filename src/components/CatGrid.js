import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    display: 'inline-flex',
    flexGrow: 1,
    maxWidth: '320px',
  },
  paper: {
    height: 80,
    width: 80,
  },
});

const CatGrid = ({ classes, spacing=8 }) => (
  <Grid container className={classes.root}>
    <Grid item xs={12}>
      <Grid container justify="center" spacing={Number(spacing)}>
        {[0, 1, 2, 4, 5, 6, 7, 8, 9].map(value => (
          <Grid key={value} item>
            <Paper className={classes.paper}/>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);


CatGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CatGrid);
