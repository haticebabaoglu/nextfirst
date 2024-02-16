import { useState } from "react";
export default function Home() {
  const [inputVal, setInputVal] = useState("")
  return (
   <div>
    <div>
      <h1>Enter Your Name</h1>
      <form>
        <input type="text" placeholder="Type your name"/>
        <button type="submit">predict data</button>
      </form>
    </div>
   </div>
  );
}
