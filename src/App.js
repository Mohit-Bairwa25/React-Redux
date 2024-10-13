import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';
import { Provider } from 'react-redux';
import store from './state/store'; // Make sure this path is correct

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Shop />} />
            {/* Add more routes here if needed */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;