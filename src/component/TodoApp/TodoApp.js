import React, { Component } from 'react'
import "./TodoApp.css";

export default class TodoApp extends Component {
  
  state = {
     input:"",
     items: []
  };


  handleChange= event => {
    this.setState({
        input: event.target.value
    });
  };


  storeItems = event => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
        items : [...this.state.items , input],
        input : ""
    });
  };


  //  Normal method
  /*
  deleteItem = key  => {
    const allItems = this.state.items;

    allItems.splice(key , 1);                      //only oneitem delete,current item  ,eg:- if 2 ,then delete 1 & 2 indexes

    this.setState({
        items: allItems                          //replace
    });
*/


// Advance method

  deleteItem = key  => {
                   
    this.setState({
        items:this.state.items.filter((data, index) => index !== key      //filter --> is method like map,filter the data,then return  not current index means the current index persist and others vanish      
    )});





  };

  render() {

    const {input, items } = this.state;

    console.log(items);

    return (
      <div className='todo-container'>
            

            <form className='input-section' onSubmit={this.storeItems}>
            <h1>Todo App</h1>
                <input type='text' value={input} onChange={this.handleChange} placeholder='Enter Items'/>
                
            </form>

            <ul>
                {items.map((data, index) => (
                    <li key={index}> {data} <i className="fas fa-trash-alt" onClick={() => this.deleteItem(index)}></i> </li>
                ))}
                
            </ul>
      </div>
    )
  }
}


export { TodoApp };