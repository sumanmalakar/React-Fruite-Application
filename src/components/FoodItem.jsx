import React from "react";

export default function FoodItem({ food, deleteList }) {
  return (

    <div>
      <div className="col-md-4">
            <div className="card my-2" style={{ width: "18rem" }} >
              <img src={food.img} className="card-img-top" alt="..." />
              <div className="card-body bg-secondary text-light">
                <h5 className="card-title">{food.name}</h5>
                <h3>$ {food.price}</h3>
                <p className="card-text">{food.desc}</p>
                <button
                  className="btn btn-warning"
                  onClick={() => deleteList(food)}
                >Delete</button>
              </div>
            </div>
          </div>
       
    </div>
  )
}