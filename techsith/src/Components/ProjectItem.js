import React, { Component } from 'react';
class ProjectItem extends Component {
  
  render() {  

  
    return (
      <li className="Project">
      {this.props.project.title}-{this.props.project.Category}
      </li>
    );
  }
}

export default ProjectItem;