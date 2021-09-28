import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function Textform(props) {
    const [text, setText] = useState("");
    const num = numOfWords();
    function numOfWords() {
        let arr = text.split(' ');
        return (arr[arr.length - 1] === '' ? arr.length - 1 : arr.length);
    }
    const handleOnChange = (e) => { setText(e.target.value); }
    function convertToUpper() { setText(text.toUpperCase()); }
    function convertToLower() { setText(text.toLowerCase()); }
    function clearText() { setText(""); }
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                    <button className="btn btn-primary my-3" onClick={convertToUpper}>Convert to Uppercase</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={convertToLower}>Convert to Lowercase</button>
                    <button className="btn btn-primary my-3 " onClick={clearText}>Clear text</button>
                </div>
            </div>
            <div className="container">
                <h1>Your text summary</h1>
                <p>{num} words and {text.length} characters</p>
                <p>{num * 0.008} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
Textform.propTypes = {
    heading: PropTypes.string.isRequired
};