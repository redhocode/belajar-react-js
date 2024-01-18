import { useState } from "react";

export const Objek = () => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: 1969
    });
    const updateColor = () => {
        setCar((prevState)=>{
            if (prevState.color === "blue") {
                return {...prevState, color: "red"};

            }
            return {...prevState, color: "blue"}
        })
    };
    return (
    <>
    <h1>my car is {car.brand}</h1>
    <div style={
        {
            marginBottom: 10,
            width: 100,
            height: 100,
            backgroundColor: car.color
        }
    }></div>
    <p>
        it is a {car.color} {car.model} from {car.year}
    </p>
    <button type="button" onClick={updateColor}>change color</button>
    </>
  )
}
