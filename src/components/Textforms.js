import React ,{useState} from 'react';

export default function Textforms(props) {
 
  const handleUpClick=()=>{
    let newText=text.toUpperCase() ; 
    setText(newText)  ; 
    props.showalert("converted to uppercase!","success")
  }
  const handleDownClick=()=>{
    let newText=text.toLowerCase() ; 
    setText(newText)  ; 
    props.showalert("converted to lowercase!","success")
  }
   const handleRedClick=()=>{
    let newText=" " ; 
    setText(newText)  ; 
  }
  const handleOnChange=(event)=>{
    setText(event.target.value) 
    event.preventDefault();
  }
  const[text,setText]=useState("Enter text here")
  return (
    <>
    <div>
      <form>
      <h1 class={`text-${props.Mode==='dark'?'light':'dark'}`}>{props.heading}</h1>

  <div className={`mb-3 text-${props.Mode==='dark'?'light':'dark'}`}>
    
    <label for="exampleInputEmail1" className="form-label " >Enter Text </label>
   <textarea className='form-control'style={{backgroundColor : props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'black'}} rows="8" value={text} onChange={handleOnChange} ></textarea>
    
    
  </div>
  
  <div>
  <button  type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
  <button  type="button" className="btn btn-secondary mx-2" onClick={handleDownClick}>Convert to lowercase</button>
  </div>
  <div>
  <button  type="button" className="btn btn-danger my-2" onClick={handleRedClick}>Clear</button>
  </div>
</form>
    </div>

    <div className={`container my-3 text-${props.Mode==='dark'?'light':'dark'}`}>
      <h1>Your Text Summary</h1>
      <p>Time to read {.008*text.split(" ").length} minutes</p>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
