import React, { Component } from 'react';

import ToolBar from './ToolBar';
import AddButton from './AddButton';
import CatGrid from './CatGrid';

import { COLOR_HEX } from '../const';


class Draw extends Component{
  constructor(props) {
    super(props);

    this.state = {
      current_color: COLOR_HEX[props.initialColor] || COLOR_HEX.green,
      grid: [
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
      ],
    };
  }

  handleColorSelect(newColor) {
    this.setState({ current_color: newColor });
  }

  handleCellSelect(row, col) {
    this.setState((state) => state.grid[row][col].color = state.current_color);
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
        <AddButton />
      </section>
    );
  }
}

export default Draw;
