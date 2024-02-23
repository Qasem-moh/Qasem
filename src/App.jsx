import HeaderNav from "./Components/HeaderNav.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";


function App() {

  return (
      <div>
          <HeaderNav/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="about" element={<About/>}/>
                  <Route path="projects" element={<Projects/>}/>
                  <Route path="contacts" element={<Contact/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
