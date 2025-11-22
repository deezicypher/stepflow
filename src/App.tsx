import { Route, Routes, } from "react-router-dom";

import Onboard from "./pages/Onboard";


function App() {



  return (
    <>
    <div className='min-h-screen w-full flex items-center justify-center' >
   

    <Routes>
    
      <Route path="/" element={<Onboard/>} />

</Routes>

    </div>
    </>
  )
}

export default App
