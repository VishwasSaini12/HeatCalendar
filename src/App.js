import './App.css';
import React from 'react';
import DateSelector from './components/DateSelector';
import Leaderboard from "./components/Leaderboard";
import HeatMap from './components/HeatMap';
import Bar from './components/Bar';
function App() {
  return <>
    {/* <DateSelector /> */}
    {/* <Leaderboard /> */}
    <Bar level={20} />
    {/* <HeatMap /> */}
  </>
}

export default App;
