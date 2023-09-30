import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNewTask from './components/new_task/AddNewTask';
import EditTask from './components/edit_task/EditTask';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
            <Route exact path='/' element={<App/>}></Route>
            <Route exact path='/new' element={<AddNewTask/>}></Route>
            <Route exact path='/edit/:id' element={<EditTask/>}></Route>
      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
