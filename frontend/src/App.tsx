import React from "react";
import ListSongs  from "./components/ListSongs";
import ShowSongStats from "./components/SongStats/ShowSongStats";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import backgroundImage from './assets/mus.jpg' // Adjust the path as necessary
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./home";
const App: React.FC = () => ( 
  <BrowserRouter> 
  <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
    <Routes>
    <Route path="/" index element={<Home />} />

      <Route path="/songs" element={<ListSongs />} />
      <Route path="/song-stats" element={<ShowSongStats />} />
    </Routes>
    <ToastContainer theme="dark"/>
    </div>
    </BrowserRouter> 
  
);

export default App;
