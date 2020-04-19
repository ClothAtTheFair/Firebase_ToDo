import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTodo} from '../actions';

class ListItem extends Component {
    handleComplete = completeTodoId => {
        const {completeTodo} = this.props;
        completeTodo(completeTodoId);
    };
    
    render() {
        const{todoId, todo} = this.props;
        return (
            <div key = "toDoName" className="todoItem">
                <h4>
                    {todo.title}
                    <button className="button" onClick={() => this.handleComplete(todoId)}>
                    <i>Done</i>
                    </button>
                </h4>
            </div>
        );
    }
}

export default connect(null, {completeTodo})(ListItem);