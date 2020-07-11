import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';
import {library} from '@fortawesome/fontawesome-svg-core' 
import {faTrash, faPencilAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faPencilAlt);

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        onEdit: false
      }
    }
    this.handleText = this.handleText.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.changeCss = this.changeCss.bind(this);
  }

  handleText = (event) => {
    this.setState({
      currentItem: {
        text: event.target.value,
        key: Date.now(),
        onEdit: false
      }
    });
  }

  addItem = event => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    //console.log(newItem);    
    if(newItem.text!==''){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: '',
          onEdit: false
        }
      })
    }
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items: filteredItems
    });
  } 

  updateItem = (text, key) => {
    const items = this.state.items;
    items.map(item => {
      if(item.key === key)
      {
        item.text = text;
        item.onEdit = false
      }
    })
    this.setState({
      items: items
    })
  } 

  changeCss = (key) => {    
    const items = this.state.items;
    items.map(item => {
      if(item.key === key)
      {
        item.onEdit = true;
      }
    })
    this.setState({
      items: items
    })
  }
 
  render(){
    return(
      <div className = 'App'>
        <form onSubmit = {this.addItem}>
          <input 
            type = 'text' 
            placeholder = 'Enter Text' 
            className = 'input' 
            value = {this.state.currentItem.text}
            onChange = {this.handleText}
          />
          <button type = 'submit' className = 'button'>Add</button>
        </form>
        <ListItem 
          items = {this.state.items} 
          deleteItem = {this.deleteItem} 
          updateItem = {this.updateItem}
          changeCss = {this.changeCss}
        />
      </div>
    );  
  }
}

export default App;
