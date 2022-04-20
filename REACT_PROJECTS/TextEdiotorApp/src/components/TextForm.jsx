import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState('');


    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }

    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copy","success")
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Remove","success")
    }

    const handleClear=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text Clear ","success")
    }

    const word=()=>{
        let w=text.split(" ").length ;
        return w;
    }

    
  return (
<> 
<div style={{color:props.mode==='dark'?'white':'black'}}>
    <div className="container" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces</button>

        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>

    </div>
    <div className="container my-3">
        <h1>Text Summary</h1>
        <p>{text===""?0:word()} Words And {text.length} Characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </div>
</>
  )
}
