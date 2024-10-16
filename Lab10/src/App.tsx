import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';

import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import Todo from "./types/Todo";

import './App.css';

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        async function getTodos() {
            const response = await fetch('http://localhost:3004/todos');
            const data = await response.json();
            setTodos(data);
        }

        getTodos();
    }, []);

    const addNewTodo = (name: string) => {
        setTodos([{id: uuidv4(), name, done: false}, ...todos])
    }

    const updateTodo = (newTodo: Todo) => {
        const oldTodo = todos.find(todo => todo.id === newTodo.id);
        if (oldTodo) {
            oldTodo.done = newTodo.done;
            setTodos([...todos]);
        }
    }

    const deleteTodo = (id: number | string) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos([...filteredTodos]);
    }

    const updateTodosAll = (done: boolean) => {
        const newTodos = todos.map(todo => {
            todo.done = done;
            return todo;
        });
        setTodos(newTodos);
    }

    const deleteFinishedTodo = () => {
        setTodos(todos.filter(todo => !todo.done));
    }

    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header onAddNewTodo={addNewTodo}/>
                <List todos={todos} onUpdateTodo={updateTodo} onDeleteTodo={deleteTodo}/>
                <Footer todos={todos} onUpdateTodosAll={updateTodosAll} onDeleteFinishedTodo={deleteFinishedTodo}/>
            </div>
        </div>
    );
}