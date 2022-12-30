import React,{ useState } from 'react'

export default function Form() {
     const [text,setText] = useState("Enter the text here");
    const toUpper=()=>{
        
        let news=text.toUpperCase();
        setText(news);
         }
         const toLower=()=>{
            let news=text.toLowerCase();
            setText(news);
             }

    const handleChange=(event)=>{
        setText(event.target.value);
                    }
return(
<>
 <div className="container my-5 text-center">
        <h1>Type your Contents Below</h1>
            <form action="">
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button className="btn btn-danger" type="submit" onClick={toUpper}>Convert to Uppercase</button>
                <button className="btn btn-danger mx-3" type="submit" onClick={toLower}>Convert to Lowercase</button>
            </form>
        
</div>
<div className="container">
<h2 clas="my-3">Here are the counts..</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
</div>
</>
);
}
