import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </div>
        </BrowserRouter>
);
}

export default App;
