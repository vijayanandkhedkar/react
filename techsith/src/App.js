import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

class App extends Component {
  constructor(){
    super();

    this.state= {

      projects:[]
    }
  }

  componentWillMount(){

    this.setState( {projects: [
      {
        title:'business objects',
        Category:'web design'
      },
       {
        title:'ecommerce objects',
        Category:'web design1'
      },
       {
        title:'cartoon objects',
        Category:'web design3'
      }
      ]});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AddProject/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
