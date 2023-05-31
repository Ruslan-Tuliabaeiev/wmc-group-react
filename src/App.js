import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation";
import {Header} from "./Components/header/Header";
import {ButtonViber} from "./Components/ButtonViber/ButtonViober";
import {Footer} from "./Components/futer/Futer";
import {ModelWindow} from "./Components/ModelWindow/ModelWindow";
import {PhotoGallery} from "./Components/PhotoGallery/PhotoGallery";
//import {Photos} from "./photos/photos.jsx"
//import photo from './photos/photo-2.json'
import './index.css';
import {SecondPage} from "./Components/SecondPage/SecondPage";



function App() {
  return (
  <BrowserRouter>
      <Header/>
      <ButtonViber/>

  <Navigation/>
  <Routes >

      <Route exact path="/" element={<PhotoGallery  />} />

      <Route path="/second" element={<SecondPage/>} />

      <Route path="/navigate" element={"hello 333"} />

  </Routes>
      <ModelWindow></ModelWindow>
      <Footer/>
</BrowserRouter>
  );
}

export default App;
