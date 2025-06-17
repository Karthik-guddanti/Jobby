import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home'
import PageNotFound from './Components/PageNotFound'
import Jobs from './Components/Jobs'
import Login from './Components/login'
function App() {
  

  return (
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>        
      </BrowserRouter>
    </div>
  )
}

export default App
