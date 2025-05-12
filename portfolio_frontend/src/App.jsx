import {Routes, Route} from "react-router-dom"
import Contact from './pages/Contact.jsx';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import './css/App.css'

function App() {


  return (
    <>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
