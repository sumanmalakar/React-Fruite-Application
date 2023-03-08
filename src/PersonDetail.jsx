import React from 'react'

export default function PersonDetail({ item, deletePerson}) {
  return (
    <>
      <div className="text-center d-flex flex-row justify-content-center bg-dark text-light ">
   
        <h1 className="mx-5">{item.name}</h1>
      <button
       className="btn btn-warning"
          onClick={() => deletePerson(item)}
       >Delete</button>
    </div>
    </>
  )
}
