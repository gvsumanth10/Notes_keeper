import { useState } from 'react';
import './App.css';

function App() {

  const[input,setinput]=useState({title:"",text:""})
  const[inputarr,setinputarr]=useState([])
  const [error,setError]=useState(false)

  function changeHandle(e){
    setinput({...input,[e.target.name]:e.target.value});
  }
  
  let {title,text}=input;
  function click(e){
    e.preventDefault();
    setinputarr([...inputarr,{title,text}])
    if((title && text)===0)
    {
      setError(true)
    }
    console.log(input)
  }

  function deleteChange(i){
    inputarr.splice(i,1);
    setinputarr([...inputarr]);
}

  return (
    <div className="App">
      <ul><li><b>Keeper</b></li></ul>
      <form>
        <input type="text" placeholder="Title" name="title" value={input.title} onChange={changeHandle}></input><br></br>
        <input type="text" className="area" placeholder="Take a note" name="text" value={input.text} onChange={changeHandle}></input><br></br>
      </form>
      <div className="btn" onClick={click}>
      {error && (title && text)<=0?
          <label id='error'>*Input field should not be empty</label>:""}
        <button>Add</button>
      </div>
      <div>
        {
            inputarr.map((info, index)=>{
              return(
                <div id={index} className='card'>
                  <b>{info.title}</b><br></br>
                  {info.text}<br></br>
                  <button id='del' onClick={()=>deleteChange(index)}><b>DELETE</b></button>
                </div>
              );
            })
        }
      </div>
    </div>
  );
}

export default App;