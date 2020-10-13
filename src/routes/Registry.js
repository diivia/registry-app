import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Registry(){
    const [registryData, setRegistryData] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [error, setError] = useState(false);

const addItem = (e) => {
    e.preventDefault();

    const tempData = [...registryData];
    tempData.push(textInput);
    setRegistryData(tempData);
    setTextInput("");
    console.log('####: registryData', registryData);
}

const removeItem = (index) => {

    let tempData = [...registryData];
    tempData.splice(index, 1);
    setRegistryData(tempData);
}

const editItem = (index) => {
    if(error) return;

    let tempData = [...registryData];
    tempData[index] = textInput;
    setRegistryData(tempData);
}

useEffect(() => {
    if(textInput.length > 10) setError(true);
    else setError(false);
}, [textInput]);

    return (
        <div>
            <h1>Registry</h1>
            <Link to="/">Click here to go to home</Link>
            <form onSubmit={addItem}>
                <label>text input:
                    <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" disabled={error}/>
            </form>
            {error ? <span style={{color: "red"}} >Word is too long</span> : null}
        {
            registryData.map((item, index) => {
                return (
                <li key={index}>{item} 
                <button onClick={() => removeItem(index)} >Remove</button>
                <button onClick={() => editItem(index)} >Edit</button>
                </li>
                )
            })
        }
        </div>
    )
}

export default Registry;