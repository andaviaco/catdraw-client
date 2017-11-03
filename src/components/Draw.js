import React, { Component } from 'react';

import ToolBar from './ToolBar';
import AddButton from './AddButton';
import CatGrid from './CatGrid';
import Snackbar from 'material-ui/Snackbar';

import { submitFigure } from '../api';

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
    };

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
    this.setState((state) => state.grid[row][col].color = state.current_color);
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
        <ToolBar
          onColorSelect={this.handleColorSelect}
        />
        <CatGrid
          grid={this.state.grid}
          onCellSelect={this.handleCellSelect}
        />
        <AddButton onClick={this.handleSubmit} />

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
