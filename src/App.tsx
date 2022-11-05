import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LabInstruments from './components/templates/instrument';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<LabInstruments></LabInstruments>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
