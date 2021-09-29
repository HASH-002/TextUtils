import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function Textform(props) {
    const [text, setText] = useState("");

    const handleOnChange = (e) => { setText(e.target.value); }
    function numOfWords() { return text.split(/\s+/).filter((ele) => ele.length !== 0).length; }
    function convertToUpper() {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
    }
    function convertToLower() {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
    }
    function handleCopy() {
        document.getElementById('myBox').select();  // Showing selected text in blue
        navigator.clipboard.writeText(text) // Copying text to clipboard
        props.showAlert("Copied to Clipboard!", "success");
    }
    function removeExtraSpaces() {
        var newtext = text.split(/[ ]+/); // Using regex removing one or more spaces and storing in array
        setText(newtext.join(" ")); // Joing array values with one space and resetting text
        props.showAlert("Extra spaces removed!", "success");
    }
    function clearText() {
        setText("");
        props.showAlert("Text Cleared!", "success");
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                    <button disabled={numOfWords() === 0} className="btn btn-primary my-3 mx-1" onClick={convertToUpper}>Convert to Uppercase</button>
                    <button disabled={numOfWords() === 0} className="btn btn-primary my-3 mx-1" onClick={convertToLower}>Convert to Lowercase</button>
                    <button disabled={numOfWords() === 0} className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy text</button>
                    <button disabled={numOfWords() === 0} className="btn btn-primary my-3 mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={numOfWords() === 0} className="btn btn-primary my-3 mx-1" onClick={clearText}>Clear text</button>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{numOfWords()} words and {text.length} characters</p>
                <p>{numOfWords() * 0.008} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
Textform.propTypes = {
    heading: PropTypes.string.isRequired
};