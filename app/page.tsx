"use client";

import { FormEvent, useState } from "react";
export default function Home() {
  const [inputVal, setInputVal] = useState("")
  const handleSumbit = (event: FormEvent) => {
    event.preventDefault();
  }
  return (
   <div>
    <div>
      <h1>Enter Your Name</h1>
      <form onSubmit={handleSumbit}>
        <input type="text" placeholder="Type your name"/>
        <button type="submit"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        >predict data</button>
      </form>
    </div>
   </div>
  );
}
