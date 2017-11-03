import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import Card, { CardContent } from 'material-ui/Card';

import ToolBar from './ToolBar';
import AddButton from './AddButton';
import CatGrid from './CatGrid';
import FiguresQueue from './FiguresQueue';

import { submitFigure, subscribeToFigureQueue } from '../api';

const initialGridState = () => ([
  [
    {color: null},
    {color: null},
    {color: null},
  ],
  [
    {color: null},
    {color: null},
    {color: null},
  ],
  [
    {color: null},
    {color: null},
    {color: null},
  ],
]);

class Draw extends Component{
  constructor(props) {
    super(props);

    this.state = {
      current_color: props.initialColor || 'green',
      grid: initialGridState(),
      openNotification: false,
      queue: [],
    };

    subscribeToFigureQueue((data) => this.setState({queue: data}));

    this.handleColorSelect = this.handleColorSelect.bind(this);
    this.handleCellSelect = this.handleCellSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
  }

  clearGrid() {
    this.setState({ grid: initialGridState() });
  }

  handleColorSelect(newColor) {
    this.setState({ current_color: newColor });
  }

  handleCellSelect(row, col) {
    this.setState((state) => {
      const mutState = state;

      if (state.grid[row][col].color === state.current_color) {
        mutState.grid[row][col].color = null;
      } else {
        mutState.grid[row][col].color = mutState.current_color;
      }
      return mutState;
    });
  }

  handleSubmit() {
    const positions = this.state.grid
      .map((row, i) => (
        row.map((col, j) => [i, j, col.color])
      ))
      .reduce((acc, row) => [...acc, ...row], [])
      .filter(position => position[2]);

    submitFigure(positions)
      .then((res) => {
        console.log(res);
        this.setState({ openNotification: true });
        this.clearGrid();
      });
  }

  handleNotificationClose() {
    this.setState({ openNotification: false });
  }

  render() {
    return (
      <section>
        <Card>
          <CardContent>
            <ToolBar
              onColorSelect={this.handleColorSelect}
            />
            <CatGrid
              grid={this.state.grid}
              onCellSelect={this.handleCellSelect}
            />
            <AddButton onClick={this.handleSubmit} />
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <FiguresQueue figures={this.state.queue} />
          </CardContent>
        </Card>

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.openNotification}
          autoHideDuration={3000}
          message={<strong>¡Figura Enviada!</strong>}
          onRequestClose={this.handleNotificationClose}
        />
      </section>
    );
  }
}

export default Draw;
