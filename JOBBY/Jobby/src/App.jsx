import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './assets/Components/Home'
import PageNotFound from './assets/Components/PageNotFound'
import Jobs from './assets/Components/Jobs'
import Login from './assets/Components/login'
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
