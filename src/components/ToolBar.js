import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';


const style = {
  margin: 5,
  height: '36px',
  width: '36px',
  minWidth: '36px',
};

const ToolBar = () => (
  <Toolbar>
    <ToolbarGroup></ToolbarGroup>
    <ToolbarGroup>
      <FlatButton
        label=""
        backgroundColor="#a4c639"
        hoverColor="#8AA62F"
        style={style}
      />
      <FlatButton
        label=""
        backgroundColor="#f44336"
        hoverColor="#b71c1c"
        style={style}
      />
    </ToolbarGroup>
  </Toolbar>
);

export default ToolBar;
