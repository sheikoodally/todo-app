import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <div>
                <Todo key={todo.id} todo={todo}/>
            </div>
        ))
    }
}



export default Todos

