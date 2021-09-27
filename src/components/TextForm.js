import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upper Case was clicked", text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLoClick = () => {
    // console.log("upper Case was clicked", text);
    let newtext = text.toLowerCase();

    setText(newtext);
  };

  const handleOnChange = (event) => {
    // console.log("Handle on change was fired");
    setText(event.target.value);
    // console.log(text);
  };

  const handleClear = () => {
    setText("");
  };

  const handleCopy = () => {
    let textBox = document.getElementById("myBox");
    textBox.select();
    navigator.clipboard.writeText(textBox.value);
  };

  const handleRemoveSpave = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };

  const [text, setText] = useState("");
  // text = "new state"; // Wrong Way to change the state
  // setText("new state"); // Correct Way to change the state but not working here
  return (
    <>
      <div className="Container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveSpave}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
