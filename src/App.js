import './App.css';
import React from 'react';
import DateSelector from './components/DateSelector';
import Leaderboard from "./components/Leaderboard";
import HeatMap from './components/HeatMap';
function App() {
  return <>
    <HeatMap />
    <DateSelector />
    <Leaderboard />
  </>
}

export default App;
