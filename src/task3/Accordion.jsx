import { useState, useEffect } from 'react'

function Accordion () {
  const [isActive, setIsActive] = useState(false)

  const [display, setDisplay] = useState('none')



function showhide(){

    if(isActive){
        
       setDisplay("block")
     
    }else{
       setDisplay("none")
       
       
    
    }
    setIsActive(!isActive )

}

  return (
    <>
      <div onClick={() => showhide()}>Section 1</div>

      <div style={{display:display}}>

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.

      </div>
    </>
  )
}

export default Accordion
