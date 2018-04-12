import React, { Component } from 'react';



class AddProject extends Component {

  constructor(){

    super();

    this.state={

      newProject:{}
    }
  }
  static defaultProps={

    categories:['web design','web development','managemnet']
  }
  handleSubmit(e){

    console.log(this.refs.title.value);
  e.preventDefault();
}
  render() {  
  
  

let categoryOptions=this.props.categories.map(category =>{

  return <option key={category} value="category">{category}</option>
});
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div>

<label>Title</label><br />
<input type="text" ref="" />
      </div>
       <div>
<label>Category</label><br />
<select ref="category">

{categoryOptions}
</select>
      </div>
      <input type="submit" value="submit"/>
      </form>
      </div>
    );
  }
}

export default AddProject;