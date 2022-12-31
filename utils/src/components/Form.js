import React,{ useState } from 'react'

export default function Form() {
    // to convert to upper case
    const toUpper=(e)=>{
        e.preventDefault();
        let news=text.toUpperCase();
        setText(news);
         }
        //  to convert to lowerCase
         const toLower=(e)=>{
            e.preventDefault();
            let news=text.toLowerCase();
            setText(news);
             }
            //  to clear all
             const toClear=(e)=>{
                e.preventDefault();
                setText('');
                 }
                //  to normal
                //  const normal=(e)=>{
                //     e.preventDefault();
                //     let news=text;
                //     setText(news);
                //      }
                //  to reverse 
                 const onReverse=(e)=>{
                    e.preventDefault();
                    let news=text.split('').reverse().join('');
                    setText(news);
                     }
                      //  to Capitalise 
                 const toCapital=(e)=>{
                    e.preventDefault();
                    let news=text.split(' ');
                    setText(news);
                     }
                    //  to alternatively inverse
                     const onInverse=(e)=>{
                        e.preventDefault();
                        var news=text.toLowerCase().split('');
                        console.log(news)
                        for (var i = 0; i < news.length; i+=2) {
                            console.log(news[i]);
                                // news=news[i].toUpperCase();
                        }
                        // setText(news);
                         }
    const handleChange=(event)=>{
        setText(event.target.value);
                    }
    const [text,setText] = useState('Type or paste your content here');

return(
<>
 <div className="container my-5 text-center">
        <h1>Type your Contents Below</h1>
            <form action="">
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button className="btn btn-danger" onClick={toUpper}>Convert to Uppercase</button>
                <button className="btn btn-danger" onClick={toCapital}>Convert to Capitalize</button>
                <button className="btn btn-danger mx-1" onClick={toLower}>Convert to Lowercase</button>
                <button className="btn btn-danger mx-1" onClick={onReverse}>Reverse</button>
                <button className="btn btn-danger mx-1" onClick={onInverse}>InVeRsE</button>

                {/* <button className="btn btn-danger mx-1" onClick={normal}>To normal</button> */}
                <button className="btn btn-danger mx-1" onClick={toClear}>Clear All</button>

            </form>
        
</div>
<div className="container">
<h2 clas="my-3">Here are the counts..</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2 clas="my-3">Preveiw</h2>
        <p>{text}</p>
</div>
</>
)
}
