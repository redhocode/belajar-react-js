import { useState } from "react"
function Basic() {
    const [color, setColor] = useState("red");
  return (
    <><h1>Color: {color}</h1>
    <div style={{
          marginBottom: 10,
          width: 100,
          height: 100,
          backgroundColor: color,
      }}></div>
      <button type="button" onClick={() => setColor("blue")}>Blue</button>
      <button type="button" onClick={() => setColor("red")}>Red</button>
      </>
  )
}

export default Basic