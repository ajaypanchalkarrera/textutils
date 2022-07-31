import React, { useState } from 'react';

export default function TextForm(props) {
    // making function for button
    const handleUpClick = () => {
        // console.log("Hello"+text);
        let newText = text.toUpperCase();
        setText(newText);
        // setText('You have clicked on handleOnChange');
    }

    // making function for button
    const handleLoClick = () => {
        // console.log("Hello"+text);
        let newText = text.toLowerCase();
        setText(newText);
        // setText('You have clicked on handleOnChange');
    }

    // reset function
    const resetClick = ()=> {
        setText("");
    }
    
    // copy function
    const copyClick = ()=> {
        var myText = document.getElementById('myBox');
        myText.select();
        navigator.clipboard.writeText(myText.value); 
        props.showAlert("Copied to clipboard","Success");   
    }

    // copy function
    const handleExtraSpace = ()=> {
        let myText = text.split(/[ ]+/);
        setText(myText.join(" "));        
    }
        
    // onChange Function 
    const handleOnChange = (event) => {
        setText(event.target.value);
    }  

    // useState
    const [text, setText] = useState(''); 
    // text = "new Text";  // Wrong way to change the state
    // setText("new Text");  // Correct way to change the state

    return (
        <>
            <div className='container' style={{color:props.mode === 'dark'?'white':'#272669'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'black':'#262969'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={resetClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={copyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-4" style={{color:props.mode === 'dark'?'white':'#272669'}}>
                <h2>Your text summary</h2>
                {/* <p> {text.split(" ").length} Words, {text.length} Characters</p> */}
                <p> {text.length>0?text.split(" ").length:0} Words, {text.length} Characters</p>
                <p> {0.008*text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something To Preview Here"}</p>
            </div>
        </>
    )
} 