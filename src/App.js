import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'cook',
        finished: false
      },
      {
        id: 2,
        title: 'buy cloth',
        finished: false
      },
      {
        id: 3,
        title: 'movie at 8',
        finished: false
      },
    ]
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Todos todos = {this.state.todos}/>
        </header>
      </div>
    );
  }
}

export default App;
