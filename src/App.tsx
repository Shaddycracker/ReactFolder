import './App.css'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
function App() {
  

  return (
       <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Login />} />
       </Routes>
       </BrowserRouter>
  )
}

export default App
