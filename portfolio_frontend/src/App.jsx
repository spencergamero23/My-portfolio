import {Routes, Route} from "react-router-dom"
import Contact from './pages/Contact.jsx';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import './css/App.css'

function App() {


  return (
    <>
    {/*Here is where the tags that actually make up the site are. Below is the navbar  */}
      <NavBar/>
      {/* Where the main content is stored */}
      <main className='main-content'>
        {/* Heres how the links actually work for react. */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
