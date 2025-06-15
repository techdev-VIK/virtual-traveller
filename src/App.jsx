import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Destinations from "./components/Destinations"
import VideoWindow from "./components/VideoWindow";

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<VideoWindow />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
