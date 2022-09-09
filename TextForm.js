import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase button was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
        console.log("Lowercase button was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = ()=>{
        console.log("Lowercase button was clicked"+text);
        let newText='';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const[text, setText] = useState('');
    // text="wrong way to change text";
    // setText("Correct way");
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-success mx-1" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text:"Enter text above"}</p>
        </div>
        </>
    )
}
