import {ChangeEvent, MouseEvent} from "react";
import Todo from "../types/Todo";
import './index.css';

type PropsType = {
    id: string;
    name: string;
    done: boolean;
    onUpdateTodo: (newTodo: Todo) => void;
    onDeleteTodo: (id: number | string) => void;
}

export default function Item({id, name, done, onUpdateTodo, onDeleteTodo}: PropsType) {

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value, e.currentTarget.checked);
        onUpdateTodo({id, name, done: e.currentTarget.checked})
    }

    const deleteHandler = (e: MouseEvent<HTMLButtonElement>) => {
        const result = window.confirm('Are you sure to delete?');
        if(result) {
            onDeleteTodo(id);
        }
    }

    return (
        <li>
            <label>
                <input type="checkbox" checked={done} onChange={changeEventHandler}/>
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
        </li>
    );
}