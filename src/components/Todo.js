import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '1rem',
            borderBottom: '0.1rem #000000 solid ',
            //ternary operator
            // if finish == true then line through else (:) none
            textDecoration: this.props.todo.finished ? 'line-through' : 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    {
                    //binding the id
                    }
                    <input 
                        type="checkbox" 
                        onChange={this.props.markFinish.bind(this, this.props.todo.id)} 
                    />{' '}
                    {this.props.todo.title}
                    <button 
                        style={btnStyle}
                        onClick={this.props.delTask.bind(this, this.props.todo.id)}
                    >X</button>
                </p>                
            </div>
        )
    }
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    float: 'right',
    padding: '4px 7px',
    borderRadius: '50%',
    cursor: 'pointer'
}


export default Todo;
