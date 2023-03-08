import React from "react";
import {useState} from 'react';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function InputForm({addList}) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [desc, setDesc] = useState('')

const submitHandler = (e) =>{
  e.preventDefault();
  const item = {
    name: name,
    price:price,
    img:img,
    desc:desc,
    id:Math.floor((Math.random() * 100) + 1)
  }
  if(name !== '' && price !== '' && img !== '' && desc !== '')
{
  addList(item);
  setName('')
  setPrice('')
  setImg('')
  setDesc('')


  toast.success('item added successfully...!', {
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
}
 
  return(

  
<form onSubmit = {submitHandler} className="text-light">
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Fruit Name</label>
    <input type="text" className="form-control bg-primary text-light" id="exampleInputEmail1" aria-describedby="emailHelp"

    value={name}
    onChange={e=>setName(e.target.value)}
    
    />
  </div>
  <div className="mb-3">
    <label htmlFor="price" className="form-label">Price</label>
    <input type="text" className="form-control bg-primary text-light" id="price"
     value={price}
     onChange={e=>setPrice(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Img(src)</label>
    <input type="text" className="form-control bg-primary text-light" id="Password"
     value={img}
     onChange={e=>setImg(e.target.value)}
    />
</div>

  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control bg-primary text-light" id="description"
     value={desc}
     onChange={e=>setDesc(e.target.value)}
    />
  </div>
 
  <button type="submit" className="btn btn-warning">Add Fruite</button>
</form>
  )
}