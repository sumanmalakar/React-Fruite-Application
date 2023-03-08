import React from 'react'
import PersonDetail from './PersonDetail'

export default function Person({ person, deletePerson }) {
  return (
    <>

      {
        person.map((item) => {
          return (
 
            <div key={item.id} className="container my-4">
              <PersonDetail  item={item} deletePerson={deletePerson} />
            </div>
          )
        })
      }

    </>
  )
}
