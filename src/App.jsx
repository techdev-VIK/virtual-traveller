import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Destinations from "./components/Destinations"

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/destinations" element={<Destinations />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
