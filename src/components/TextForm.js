import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowClick= () =>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClearClick= () =>{
        let newText =""
        setText(newText)
        props.showAlert("Text is cleared", "success")
    }
    const handleOnChange = (event) => {   //able to write the text in the box
        setText(event.target.value)
    }
    const handdleCopy = () => {   
        var text=document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied on Clipboard", "success")
    }
    const[text, setText] = useState("");
    // text = "New text here " //wrong way to change text
    // setText("New text change") //right way to change text
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#424e48':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" value={text} onChange={handleOnChange} rows="6"></textarea>
            </div>
            <button className="btn btn-success" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-success mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-success " onClick={handleClearClick}>Clear Text </button>
            <button className="btn btn-success my-2 mx-2" onClick={handdleCopy}>Copy Text </button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            {/* we can use text use text.split(" ").length to count the no of words */}
            <p>{text.trim().split(/\s+/).filter((word) => word.length > 0).length} word and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes takes to read.</p>
        </div>
        </>
    )
    }
    