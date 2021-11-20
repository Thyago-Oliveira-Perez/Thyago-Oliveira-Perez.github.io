import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import './App.css';
import About from "./componentes/About/About.jsx";
import "./componentes/Header/Header.jsx"
import Header from './componentes/Header/Header.jsx';
import { GlobalContext} from "./componentes/globalContext";


function App() {

  const {currentPagina} = React.useContext(GlobalContext)

  React.useEffect(()=>{
    console.log();
  },[])
  return (
     <div className="container">
          <Header/>
          {currentPagina == 0 ? <About/> : null}
     </div>

  );
}

export default App;