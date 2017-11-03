import React, { Component } from 'react';

import ToolBar from './ToolBar';
import AddButton from './AddButton';
import CatGrid from './CatGrid';

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
    };
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
    this.clearGrid();
  }

  render() {
    return (
      <section>
        <ToolBar
          onColorSelect={this.handleColorSelect.bind(this)}
        />
        <CatGrid
          grid={this.state.grid}
          onCellSelect={this.handleCellSelect.bind(this)}
        />
        <AddButton onClick={this.handleSubmit.bind(this)} />
      </section>
    );
  }
}

export default Draw;
