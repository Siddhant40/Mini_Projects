/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  
  const [length, setlength] = useState(8);
  const [incchar, setchar] = useState(false);
  const [incnumber, setnumber] = useState(false);
  const [passward, setpass] = useState("");

  //This is the second hook
  //This is the main funtion that is used to generate password
  //https://www.w3schools.com/react/react_usecallback.asp
  const passgen = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (incnumber) str += "0123456789";
    if (incchar) str += "!@#$%^&*()?";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      }
    setpass(pass);  

  }, [length, incchar, incnumber, setpass]);
  
  //This is the third hook
  //This funtion is used to run the passgen funtion on some triggers 
  //https://www.w3schools.com/react/react_useeffect.asp
  useEffect(()=>{
    passgen();
  },[length,incchar,incnumber,passgen]);

  //This is the 4th hook 

const passref= useRef(null);

  //This function is used to copy to clipboard
  const copy=useCallback(()=>{
    //below line is used to select(highlight in blue) the password when we click the copy button
    passref.current?.select();
    //below line is used only when we want to select the password of perticular size
    // passref.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(passward);
    },[passward]) 
    
  return (
    <>
      <div className=" w-screen h-screen bg-slate-500 flex items-center justify-center ">
        <div className=" w-[50%] bg-slate-800 h-52 rounded-3xl flex items-center  justify-center flex-col">
          <h1 className=" text-orange-400 text-3xl font-serif pb-3">
            Password Generator
          </h1>
          <div className="flex h-14 w-[100%]   justify-center">
            <input
              type="text"
              value={passward}
              className=" w-[60%] rounded-l-3xl pl-10 py-1 text-xl"
              placeholder="Password"
              readOnly
              ref={passref}
            />
            <button onClick={copy} className=" outline-none h-14 w-20 bg-blue-600 font-bold rounded-r-3xl hover:scale-105 hover:border hover:transform-gpu ">
              Copy
            </button>
          </div>

          <div className=" w-full flex justify-around items-center h-10 pt-5">
            <div>
              <input
                type="range"
                min={5}
                max={30}
                value={length}
                className=" cursor-pointer mr-2"
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />
              <label className=" text-orange-500">length={length} Chars</label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={incnumber}
                id="number-inp"
                onChange={() => {
                  setnumber((prev) => !prev);
                }}
                className=" m-1 size-4"
              />
              <label className=" text-orange-500 ml-3">Numbers</label>
              <input
                type="checkbox"
                defaultChecked={incchar}
                id="char-inp"
                onChange={() => {
                  setchar((prev) => !prev);
                }}
                className="p-3 m-3 size-4"
              />
              <label className=" text-orange-500">Special Symbols</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
