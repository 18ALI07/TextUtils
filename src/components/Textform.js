import React,{useState} from 'react'
export default function Textform(props) {
    const [text,setText]=useState("");
const onchangetext=(event)=>{
    setText(event.target.value);
}
const onclickbutup=()=>{
    //console.log("you have clicked")
    let count=0
    if(text!==""){let arr=text.split(" ");
   // console.log(arr);
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==""){
            count++;
        }
    }}
    
    if(count===0){
        props.showAlert('Please Enter any Valid Word','warning')
    }

    else if(count!==0){
        let newtext=text.toUpperCase();
        setText(newtext);
      
        props.showAlert("Converted to UPPERCASE","success");
    }
     
    else{
        props.showAlert('Please Enter any text','danger')
    }

}
const onclickclear=()=>{
    //console.log("you have clicked")
    if(text !==''){
        let newtext="";
        setText(newtext);
        props.showAlert("Text Cleared","success");
    }
    else{
        props.showAlert('Please Enter any text','danger')
    }

}
const wordcount=()=>{
    let count=0
    if(text!==""){let arr=text.split(" ");
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==""){
            count++;
        }
    }}
    
    return count;
}
const onclickbutlo=()=>{
    //console.log("you have clicked")
    let count=0
    if(text!==""){let arr=text.split(" ");
   // console.log(arr);
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==""){
            count++;
        }
    }}
    if(count===0){
        props.showAlert('Please Enter any Valid Word','warning')
    }

    else if(count!==0){
        let newtext=text.toLowerCase();
        setText(newtext);
      
        props.showAlert("Converted to lowercase","success");
    }
     
    else{
        props.showAlert('Please Enter any text','danger')
    }}
    
  return (
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3" >
    <h3>{props.heading}</h3>
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="mybox"  value={text} onChange={onchangetext}  rows="8"></textarea>
 <div className="container my-3"><button className="btn btn-primary mx-1" onClick={onclickbutup}>UPPERCASE</button>
  <button className="btn btn-primary mx-1" onClick={onclickbutlo}>lowercase</button>
  <button className="btn btn-primary mx-1" onClick={onclickclear}>Clear</button></div>
  
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}> <h2>Your Text Summary</h2>
  <p>{wordcount()} words and {text.length} characters</p>
  <p>{0.008*text.length} minutes read</p></div>
 <div className="container">
    <h3>Preview</h3>
    <p>{text.length>0?text:'Enter in Textbox to preview here'}</p>
 </div>
  </div>
   
  </div>
    
  )

}

