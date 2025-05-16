import './App.css'
import Btn from './assets/Btn'
import RegistrationForm from './day2/Form'
import ShopPage from './day2/Shop'
import { BrowserRouter, Routes, Route} from "react-router-dom";

// import Accordion from './task3/Accordion'

// import Flip from './task2/Flip'
// import Addinc from './task1/addinc'
function App() {



  return (
    <div className='app'>
      {/* <Addinc/> */}
      {/* <Flip/> */}
      {/* <Accordion/>
      <Btn size="200px" text="click"/>
      <Btn size="100px" text="add"/>
      <Btn size="300px" text="decrease"/> */}
      {/* <ShopPage/> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<RegistrationForm />} />
              <Route path="/shop" element={<ShopPage />} />
            </Routes>
          </BrowserRouter>
        
    </div>
  )
}

export default App
