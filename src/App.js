import React, {Component} from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {Search} from './components/search/search.component';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    };
    //if you dont want to use arrow function then uncomment below code
    
    //this.handleChange=this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(users=> this.setState({monsters:users}))
  }

  handleChange=(e)=>{
    this.setState({searchField:e.target.value})
  }

render(){

const { monsters, searchField}=this.state;
const filteredmonters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>  
      <Search placeholder="search monsters" handleChange={this.handleChange}/>
     
      <CardList monsters={filteredmonters } />
        
    
     
    
    </div>
  );
}
}
  

export default App;
