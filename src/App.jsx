import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Contact from './components/Contact'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import MainContent from './components/MainContent'
import Posts from './components/Posts'

function App() {
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maincontent" element={<MainContent />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
