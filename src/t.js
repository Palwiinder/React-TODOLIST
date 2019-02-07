import React from 'react';
import NewTodo from './Todo'

class Todo extends React.Component{
  state = {
    Todo:"",
    Todos: [],
    DoneTodos: []
   
  }

  makeTodo = (Todo) => {
    this.setState ({
      Todo : Todo
    })
  }

  completedTodo = () => {
    this.setState((prevState) => ({
      
      DoneTodos: [...prevState.DoneTodos, {
        DoneTodos: prevState.completedTodo
      }]

    }))
  }

  
  formSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      
      Todos: [{Todo: prevState.Todo,},...prevState.Todos]
    }))
  }

  completedSubmit = (Todo) => {
  
    this.setState((prevState) => ({
     DoneTodos: [...prevState.Todos.filter((todo) => {
       
         return todo === Todo
         
       })
     ]
    }))
    this.setState((prevState) => ({
      Todos: [...prevState.Todos.filter((todo) => {
          return todo !== Todo
        })
      ]
     }))
  }

  

  DeleteTodo = (Todos) => {
    this.setState((prevState) => ({
      Todos: prevState.Todos.filter((Todo) => {
        return Todos !== Todo
      })
    }))
  }

  DeleteTodos = (Todos) => {
    this.setState((prevState) => ({
      Todos: prevState.Todos.filter((Todo) => {
        return Todos === Todo
      })
    }))
  }
  
  render(){
    
    return(
      <div>
        <form onSubmit={this.formSubmit}>
          <input type ="text" placeholder ="Todo" 
      onChange ={(event) => this.makeTodo(event.target.value)}
       value ={this.state.Todo}></input>
         
        <button type="submit">Submit</button>
        
        </form>

        {this.state.Todos.map((Todo, index) => (
        <div key ={index}><NewTodo info={Todo}/>
         <button onClick={()=>this.completedSubmit(Todo)}>Submit</button>
         <button onClick={()=>this.DeleteTodo(Todo)}>Delete</button>
        </div>))}
        
        
        {this.state.DoneTodos.map((DoneTodo, index) => (
        <div key ={index}><NewTodo info={DoneTodo}/>
        <button onClick={()=>this.DeleteTodos(Todo)}>Delete</button>
        
       
       
        
        
        </div>))}
        </div>

    )
  }
}

export default Todo


import React, { Component } from 'react';

class AllTodos extends Component{
  state = {
    Todo:"",
    todos:[]
    
  }
  addNewTodo = (Todo) =>{
    this.setState({
      Todo: Todo
    }
      )
  }
  removeTodo = (todos) => {
    this.state((prevState) => ({
      todos: prevState.todos.filter((todo) => {
        return todos !== todo
      })
    }))
  }

  formSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      Todo:"",
      
      todos: [...prevState.todos,{
      Todo: prevState.Todo,
      
    }]
    }))
  }


  render(){
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <input type= "text" 
          onChange={(event) => this.addNewTodo(event.target.value)}
          value={this.state.Todo} ></input>
          <button>Submit</button>
         
        </form>
        
        {this.state.Todos.map((Todo, index) => (
        <div key ={index}><NewTodo info={Todo}/>
         <button onClick={()=>this.completedSubmit(Todo)}>Submit</button>
         <button onClick={()=>this.DeleteTodo(Todo)}>Delete</button>
        </div>))}
    
    </div>
    )
  }
}

export  default AllTodos;

import React from 'react';
import NewTodo from './Todo'

class Todolist extends React.Component{

  state = {
    myTodo:"",
    todos:[],
    doneTodos:[]
  }

  makeTodo = (myTodo) => {
    this.setState ({
      myTodo : myTodo
    })
  }

  completedTodos = () => {
    this.setState((previousState) => ({
      doneTodos:[...previousState.doneTodos, {
        doneTodos : previousState.completedTodos
      }]
    }))
  }

  formSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      myTodo:"",
      
      todos: [{myTodo: prevState.myTodo},...prevState.todos,{
                 
    }]
    }))
  }

  submitComplete = (todo) => {
    this.setState((previousState) => ({
      doneTodos: [...previousState.todos.filter((todo)=> {
        return todo === NewTodo
      })]
    }))
  }
  render(){
    return(
      <div>
      <form onSubmit={this.formSubmit}>
      <input type="text" onChange ={(event) => this.makeTodo(event.target.value)}
       value ={this.state.myTodo}></input>
       <button type="submit">Submit</button>
      </form>

      {this.state.todos.map((todo, index) => (
        <div key ={index}><NewTodo info={todo}/>
         <button onClick={()=>this.submitComplete(todo)}>Submit</button>
         {/* <button onClick={()=>this.DeleteTodo(Todo)}>Delete</button> */}
        </div>))}
      </div>
    )
    
  }
}
export default Todolist


h1{
    text-align: center;
    
  }
  
  input{
    border: 2px solid black;
    border-radius: 4px;
    width: 200px;
    display: block;
    margin-left: 600px;
    margin-top: 50px;
    padding: 12px 20px;
    box-sizing: border-box;
  }
  
  .button1{
    width: 60px;
    display: block;
    margin-left: 600px;
   
    border-radius: 8px;
    text-align: center
  }
  .button2{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    margin-right: 15px
  }
  .button3{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }
  .Incomplete{
    width: 500px
  }