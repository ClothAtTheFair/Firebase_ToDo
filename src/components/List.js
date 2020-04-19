import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions/index';
import ListItem from './ListItem';

class List extends Component {
  constructor(props){
    super(props);
      this.state = { showForm: false,
        formValue: '', tasksCompleted: 0};

        this.formSubmit = this.formSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    componentWillMount() {
      this.props.fetchToDos();
    }
  

  inputChange = e => {
    this.setState({formValue: e.target.value});
  };

  formSubmit = event => {
    const {formValue} = this.state;
    const {addToDo} = this.props;
    event.preventDefault();
    addToDo({title: formValue});
    this.setState({formValue: ""});
    
  };

  renderForm = () => {
    const {showForm, formValue} = this.state;
    if (showForm) {
      return (
          <form className="todoItem" onSubmit={this.formSubmit}>
            <label>
              Name:  
              <input type = "text"
                value={formValue}
                onChange={this.inputChange}
                id="toDoNext" />
              </label>
              <input className="button" type="submit" value = "Submit" />
              <label htmlFor="toDoNext"> What Next?</label>
          </form>
      );
    }
  };
  renderToDo() {
    const {data} = this.props;
    const toDos = _.map(data, (value, key) => {
      return <ListItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div>
        <h4 className= "todoItem">You have no more things ToDo!</h4>
      </div>
    );
  }
 
  render() {
    const {showForm} = this.state;
    return (
      <div className="container">
        <div>
          <h1 className = "title">To Do List</h1>
          {this.renderForm()}
          {this.renderToDo()}
        </div>
        <div>
          <button className="close" onClick={() => this.setState({showForm: !showForm})}>
          {showForm ? (
            <i>Close</i>
          ) : (
            <i>Add</i>
          )}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({data}) => {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(List);