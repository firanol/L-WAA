import {KeyboardEvent} from 'react';

import './index.css';

type PropsType = {
    onAddNewTodo: (name: string) => void
}
export default function Header(props: PropsType) {
    const {onAddNewTodo} = props;
    const keyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.trim();
        if (e.key === 'Enter') {
            if (!value) {
                alert('please enter task name');
            } else {
                onAddNewTodo(value);
                e.currentTarget.value = '';
            }
        }
    }

    return (
        <div className="todo-header">
            <input type="text" placeholder="Enter task name" onKeyUp={keyUpHandler}/>
        </div>
    );
}