import { useState } from "react"
function Addinc() {
      const [count, setCount] = useState(0)
    
  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>Add</button>
        <button onClick={() => setCount((count) => count - 1)}>decrease</button>
<div>{count}</div>

        <button onClick={() => setCount((count) => count=0)}>reset</button>

    </>
  )
}

export default Addinc