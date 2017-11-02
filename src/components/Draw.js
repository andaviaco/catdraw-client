import React, { Component } from 'react';

import ToolBar from './ToolBar';
import AddButton from './AddButton';
import CatGrid from './CatGrid';


class Draw extends Component{
  render() {
    return (
      <section>
        <ToolBar />
        <CatGrid />
        <AddButton />
      </section>
    );
  }
}

export default Draw;
