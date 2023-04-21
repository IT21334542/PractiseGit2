import { Environment,SelectAvatar,CustomizeAvatar} from "./Component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';





function App() {




  
  return (
    //<div  style={{ width: "100vw", height: "100vh" }}>
     //<Header/>
    //<Environment/>
    
  

  <BrowserRouter>
    <Routes>
      <Route index element={<Environment/>}/>
      <Route path="/SelectAvatar" element={<SelectAvatar/>}/>
      <Route path="/CustomizeAvatar" element={<CustomizeAvatar/>}/>
    </Routes>
  
  </BrowserRouter>
  //</div>
  );
}

export default App;
