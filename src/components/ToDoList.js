import React from 'react';
import ToDo from "./ToDo";

const ToDoList = ({ todo, todos, setTodos, filteredTodos }) => {
    
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <ToDo 
                        todo={todo} 
                        todos={todos} 
                        setTodos={setTodos} 
                        key={todo.id} 
                        text={todo.text} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;