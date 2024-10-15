import './index.css';
import Todo from "../types/Todo";
import {ChangeEvent} from "react";

type PropsType = {
    todos: Todo[];
    onUpdateTodosAll: (done: boolean) => void;
    onDeleteFinishedTodo: () => void;
}

export default function Footer(props: PropsType) {
    const {todos, onUpdateTodosAll, onDeleteFinishedTodo} = props;
    const checkboxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onUpdateTodosAll(e.currentTarget.checked);
    }
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox"
                       onChange={checkboxChangeHandler}
                       checked={todos.filter(todo => todo.done).length === todos.length && todos.length !== 0}
                />
            </label>
            <span>
          <span>Finished {todos.filter(todo => todo.done).length}</span> / total {todos.length}
        </span>
            <button className="btn btn-danger" onClick={onDeleteFinishedTodo}>Delete Finished Tasks</button>
        </div>
    );
}