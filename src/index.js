import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './scenes/Home/Home';  // Scene components
import Logement from './scenes/Logement/Logement';
import APropos from './scenes/APropos/APropos';
import NotFound from './scenes/NotFound/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<Logement />} />
        <Route path="/Logement" element={<APropos />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
      </Routes>
    </Router>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


