import React from "react";

import './button.scss'

const Button = ({ children, addTask }) => {
    return (
        <button onClick={addTask} className="btn">
            {children}
        </button>
    )
}

export default Button;