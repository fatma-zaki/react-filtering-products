import { useEffect, useState } from "react"
import head from './../assets/1.jpg'
import tail from './../assets/2.jpg'

function Flip() {
const [src, setSrc] = useState(head)
const [chead, setChead] = useState(0)
const [ctail, setCtail] = useState(0)

function clicked(){
     const rand = Math.ceil(Math.random()* 2)
     if(rand>1)
     {
    
        setSrc( head)
     setCtail(ctail + 1)

    }

else {
        setSrc( tail)

setChead(chead + 1)

}
}


  return (
    <>
 <img style={{width: "80px"}} src={src} onClick={()=> clicked()} />

 <p>tial show {ctail}</p>
 <p>head show {chead}</p>
    </>
  )
}

export default Flip