import React , {useState} from 'react'

export default function TextForm(props) {
   const [text , setText] = useState(" ")
   
   const handleUpClick = () => {
     let newText = text.toUpperCase();
     setText(newText);
   }

   const handleOnChange = (event) => {
      setText(event.target.value);
    
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () => {
        setText("");
    }
   

    return (
        <>
    <div className="container">
      <h2>{props.heading}</h2>
      <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>

      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>

      <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>

    </div>

    <div className="container">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length } Minutes to read this</p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
  )
}
