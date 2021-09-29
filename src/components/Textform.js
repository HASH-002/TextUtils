import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function Textform(props) {

    const [text, setText] = useState("");

    const num = numOfWords();
    function numOfWords() {
        let arr = text.split(/[ ]+/);
        return (arr[arr.length - 1] === '' ? arr.length - 1 : arr.length);
    }

    const handleOnChange = (e) => { setText(e.target.value); }

    function convertToUpper() {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
    }
    function convertToLower() {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
    }
    function handleCopy() {
        // Showing selected text in blue
        document.getElementById('myBox').select();
        // Copying text to clipboard
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard!", "success");
    }
    function removeExtraSpaces() {
        // Using regex removing one or more spaces and storing in array
        var newtext = text.split(/[ ]+/);
        // Joing array values with one space and resetting text
        setText(newtext.join(" "));
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
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                    <button className="btn btn-primary my-3" onClick={convertToUpper}>Convert to Uppercase</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={convertToLower}>Convert to Lowercase</button>
                    <button className="btn btn-primary my-3" onClick={handleCopy}>Copy text</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-primary my-3" onClick={clearText}>Clear text</button>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{num} words and {text.length} characters</p>
                <p>{num * 0.008} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>
        </>
    )
}
Textform.propTypes = {
    heading: PropTypes.string.isRequired
};