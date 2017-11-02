import React, { Component } from 'react';

import ToolBar from './ToolBar';
import AddButton from './AddButton';


class Draw extends Component{
  render() {
    return (
      <section>
        <ToolBar />

        <AddButton />
      </section>
    );
  }
}

export default Draw;
