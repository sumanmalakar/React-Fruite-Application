import React from "react";
import { useState } from 'react';
import Form from './components/InputForm'
import FoodItem from './components/FoodItem'
import "./style.css";
// import Person from "./Person";
// import InputForm from "./Input_Form";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

export default function App() {
  const [list, setList] = useState([
    {
      price: "100", name: "Apple", id: 1,
      img: "https://ychef.files.bbci.co.uk/976x549/p07v2wjn.jpg",
      desc:"The best Apples in The World!"
    },

    { price: "2", id: 2, name: "Passionfruit", img: "https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail-732x549.jpg",
  desc:"This is item description" },

    { price: "3", id: 3, name: "Many Fruit In One", img: "https://content.jdmagicbox.com/comp/def_content/fruit-vendors/shutterstock-763518739-fruit-vendors-5-8wlk2.jpg?clr=660000",
  desc:"This is item description" },

  ])

  const addList = (listItem) => {

    setList([...list, listItem]);
  }
  const deleteList = (food) => {
    console.log("Food is deleting..")
    setList(
      list.filter((e) => e !== food)
    )

      toast.success('item is deleted !', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});

  }

  // const [person, setPerson] = useState([
  //   { name: 'suman', id:1 },
  //   { name: 'ram', id:2 },
  //   { name: 'shyam', id:3 },
  //   { name: 'mohan', id:4 },
  //   { name: 'ramesh' , id:5},

  // ])


  // const addPerson = (suman) =>{
  //   const obj = {
  //     name: suman,
  //     id: Math.random()
  //   }
  //   setPerson([...person, obj])
  // }

  // const deletePerson = (item) =>{
  //   console.log("Deleting the person detail..");

  //   setPerson(person.filter((e) => e!== item))
  // }


  return (
    <>
    <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <div className="container my-3">
        <Form addList={addList} />
      </div>
      <div className="container ">
        <div className="row ">
      {
        list.map((food) => {
          return (
            <div className="col bg-dark d-flex justify-content-center">
                <FoodItem
                  key={food.id}
                  food={food}
                  deleteList={deleteList}
                />
                
            </div>
                )
              })
            }
    
            </div>
      </div>

    </>

    // <>
    //   <InputForm addPerson = {addPerson} />
    //   {/* <button onClick = {addPerson}>add kar de bhai</button> */}
    //   <Person person={person} deletePerson={deletePerson} />

    // </>


  );
}




