import React from 'react';

class NewTodo extends React.Component{
    render(){
        return(
            
                <div className="box" onClick={() => {this.props.DeleteTodo(this.props.info.Todo)}} >
                
                <li >
                  
                {this.props.info.Todo}
                </li>
            </div>
        )
    }
}







export default NewTodo
