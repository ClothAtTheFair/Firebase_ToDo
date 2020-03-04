import {todosRef} from '../firebase'

export const FETCH_TODOS = 'FETCH_TODOS';

export const addToDo = newToDo => async dispatch => {
    todosRef.push().set(newToDo);
};

export const completeTodo = completeTodoId => async dispatch => {
    todosRef.child(completeTodoId).remove();
};

export const fetchToDos = () => async dispatch => {
    todosRef.on("value", snapshot => {
        dispatch({
            type:FETCH_TODOS,
            payload: snapshot.val()
        });
     });

};