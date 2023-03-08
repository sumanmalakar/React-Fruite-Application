import React from 'react'
import { useState } from 'react'

export default function Input_Form({ addPerson }) {
  const [input, setInput] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault();
    if(input !== ''){
    addPerson(input);}
  }

  return (
    <div>
      <div className="container my-5">

        <form onClick = {submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Input something</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>


          <button
            type="submit"
            className="btn btn-primary"
            
          >
            Submit
          </button>
        </form>
        {/* <p>{input}</p> */}
      </div>
    </div>
  )
}
