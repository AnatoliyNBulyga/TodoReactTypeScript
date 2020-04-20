import React from "react";

const TodoForm: React.FC = () => {
    return (
        <div className="imput-field">
            <input type="text" id="title"/>
            <label htmlFor="title" className="active">
                Введине название заметки
            </label>
        </div>
    );
}
export default TodoForm;