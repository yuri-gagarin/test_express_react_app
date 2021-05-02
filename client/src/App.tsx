import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { HomeComponent } from "./components/HomeComponent";
import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Router>
        <HomeComponent />
    </Router>
  );
}

export default App;
