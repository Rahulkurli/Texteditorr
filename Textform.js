import React, { useState } from "react";
export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase.", "success!")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase.", "success!")
    }
    const capitalize=()=>
    {
      let newText=text.toLowerCase();
      setText(newText.charAt(0).toUpperCase()+newText.slice(1));
      props.showAlert("Converted to Capitalized.", "success!")
    }
    const clear = () => {
        let newText = ' ';
        setText(newText);
        props.showAlert("Text cleared.", "success!")
    }
    const copy=()=>
    {
        let text=document.getElementById('textarea');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard.", "success!")
    }
    const handleExtraSpaces=()=>
    {
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Removed extra spaces.", "success!")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1 className="my-3">{props.heading}</h1>

                <textarea className="form-control my-2" id="textarea" rows="5" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}></textarea>

                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary ms-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary ms-1" onClick={capitalize}>Capitalize</button>
                <button className="btn btn-primary ms-1" onClick={clear}>Clear</button>
                <button className="btn btn-primary ms-1" onClick={copy}>Copy text</button>
                <button className="btn btn-primary ms-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                
            </div>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1 className="my-3">Your Text Summary</h1>
                <p>{text.split(" ").length-1} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} Minutes to read.</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter some text to preview it"}</p>
            </div>
        </>
    );


}