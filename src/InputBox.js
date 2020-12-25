import React from 'react';
import {useState} from "react";

function InputBox({addItem}) {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if( !value) return;
        addItem(value);
        console.log(value);
        setValue("");
    }

    return (
        <div className="inputBox">
            <form onSubmit={handleSubmit}>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default InputBox
