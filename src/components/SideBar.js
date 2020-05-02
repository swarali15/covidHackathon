import React from 'react';
import Sidebar from "react-sidebar";

import ReactDom from 'react-dom'

  class SideBar extends React.Component {
      constructor() 
  {
    super();
    this.state = {
      showComponent: false,
    };
    this.onBatteriesClick = this.onBatteriesClick.bind(this);
  }
      
onBatteriesClick() {
    this.setState({showComponent: true});
  }
 
render() {
    
    return (
    <div className="sidebar-container">
       <div className="sidebar-link">Dashboard</div>
       <div className="sidebar-link">Settings</div>
    </div>      
  )
}
  }        
     
export default SideBar