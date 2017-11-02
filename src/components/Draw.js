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
    };
  }

  handleColorChange(newColor) {
    this.setState({ current_color: newColor });
  }

  render() {
    return (
      <section>
        <ToolBar onColorSelect={this.handleColorChange.bind(this)} />
        <CatGrid />
        <AddButton />
      </section>
    );
  }
}

export default Draw;
