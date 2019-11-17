import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';

class App extends Component {
  state = {
    todos: [
      {
        id: 0,
        title: 'cook',
        finished: false
      },
      {
        id: 1,
        title: 'buy cloth',
        finished: false
      },
      {
        id: 2,
        title: 'movie at 8',
        finished: false
      },
    ]
  }

  //arrow function allows function to read 'this' or .bind(this)
  markFinish = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.finished = !todo.finished;
        console.log(id);
      }
      return todo;
    })})
  }

  delTask = (id) => {
    this.setState ({ todos:[ ...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Todos 
          todos = {this.state.todos} 
          markFinish = {this.markFinish}
          delTask = {this.delTask}
        />
      </div>
    );
  }
}

export default App;
