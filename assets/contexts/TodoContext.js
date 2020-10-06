import React, { createContext } from 'react';

export const TodoContext = createContext();

class TodoContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { task: 'Lettre de motivation' }]
        }
    }

    //create
    createTodo() {

    }

    //read
    readTodo() {

    }

    //udpate
    updateTodo() {

    }

    //delete
    deleteTodo() {

    }

    render() {
        return <TodoContext.Provider value={{
            ...this.state,
            createTodo: this.createTodo(),
            updateTodo: this.updateTodo(),
            deleteTodo: this.deleteTodo()
        }}>
            {this.props.children}
        </TodoContext.Provider>
    }
}

export default TodoContextProvider;