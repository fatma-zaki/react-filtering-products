

function Btn({text, clicking, color, size}) {
  return (
   <button style={{backgroundColoe: color, width: size }}>
    {text}
   </button>  
  )
}

export default Btn