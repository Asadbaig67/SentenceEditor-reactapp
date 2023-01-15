import React, { useState } from "react";


export default function Textarea(props) {


   const [text, setText] = useState('');
   const InputChangeFunction = (event) => {
      setText(event.target.value);
   }
   const BtnUpClickFunction = () => {
      let newtext = text.toUpperCase();
      setText(newtext);
   }
   const BtnLoClickFunction = () => {
      let newtext = text.toLowerCase();
      setText(newtext);
   }
   const BtnClClickFunction = () => {
      let newtext = "";
      setText(newtext);
   }
   const BtnCopyClickFunction = () => {
      navigator.clipboard.writeText(text);
   }
   const BtnRemClickFunction = () => {
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "));
   }
   const CountWhiteSpaces = () => {

   }

   return (
      <>
         <div className="container mt-5">
            <div className="mb-3">
               <h2 className={`text-${props.mode.ActualMode === 'light' ? 'dark' : 'light'}`}>Enter Your Text Here</h2>
               <textarea style={{ backgroundColor: props.mode.ActualMode === 'light' ? 'white' : 'black', color: props.mode.ActualMode === 'light' ? 'black' : 'white' }} placeholder="Enter Your Texthere" onChange={InputChangeFunction} value={text} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button id="btn-id" className="btn btn-outline-info mx-1" onClick={BtnUpClickFunction}>
               Convert To Upercase
            </button>
            <button id="btn-id" className="btn btn-outline-info mx-1" onClick={BtnLoClickFunction}>
               Convert To Lowercase
            </button>
            <button id="btn-id" className="btn btn-outline-info mx-1" onClick={BtnClClickFunction}>
               Clear Text
            </button>
            <button id="btn-id" className="btn btn-outline-info mx-1" onClick={BtnCopyClickFunction}>
               Copy Text
            </button>
            <button id="btn-id" className="btn btn-outline-info mx-1" onClick={BtnRemClickFunction}>
               Remove ExtraSpaces
            </button>
         </div>
         <div className="container">
            <br />
            <h2 className={`text-${props.mode.ActualMode === 'light' ? 'dark' : 'light'}`}>Text Summary</h2>
            <br />
            <h6 className={`text-${props.mode.ActualMode === 'light' ? 'dark' : 'light'}`}>Total Words <span id="WordCount">{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</span></h6>
            <h6 className={`text-${props.mode.ActualMode === 'light' ? 'dark' : 'light'}`}>Total Letter or Characters <span id="WordCount">{text.length}</span></h6>
         </div>
      </>
   );
}
