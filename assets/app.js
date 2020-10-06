import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import TodoContextProvider, { TodoContext } from './contexts/TodoContext';
import TodoList from './components/TodoList'

class App extends React.Component {

    render() {
        return <TodoContextProvider>
            <TodoList />
        </TodoContextProvider>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));