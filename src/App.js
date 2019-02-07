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
      
      Todos: [...prevState.Todos,{
      Todo: prevState.Todo,
      
    }]
    }))
  }

  completedSubmit = (Todo) => {
  
    this.setState((prevState) => ({
     DoneTodos: [...prevState.Todos.filter((todo) => {
         return todo === Todo
       })
     ]
    }))
  }

  DeleteTodo = (Todos) => {
    this.setState((prevState) => ({
      Todos: prevState.Todos.filter((Todos) => {
        return Todos.Todo !== Todo
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
         <button onClick={()=>this.DeleteTodo(NewTodo)}>Delete</button>
        </div>))}
        
        
        {this.state.DoneTodos.map((DoneTodo, index) => (
        <div key ={index}><NewTodo info={DoneTodo}/>
       
       
        
        
        </div>))}
        </div>

    )
  }
}

export default Todo