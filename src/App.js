import './App.css';
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { startOfYear, endOfYear, format } from 'date-fns';
import 'react-calendar-heatmap/dist/styles.css';
function App() {
  // Sample data, replace with your actual data
  const startDate = startOfYear(new Date());
  const endDate = endOfYear(new Date());
  const heatmapData = [
    { date: '2024-01-09', count: 4 },
    { date: '2024-01-10', count: 25 },
    { date: '2024-11-07', count: 45 },
    { date: '2024-12-01', count: 78 },
    { date: '2024-12-01', count: 89 },


    // Add more data points here
  ];
  const daysOfWeek = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'];

  return (
    <div className="heap-div">
      <h1 style={{color: 'white',marginLeft: '2.5%',fontSize: '22px'}}>23 Threats in 2024</h1>
      <div style={{display: 'flex',border: '1px solid grey',padding: '1.5%',margin: '1.5% 1%',borderRadius: '10px'}}>
        <div className="week-labels">
          {daysOfWeek.map(day => <span key={day} className="day-label" style={{color: 'grey '}}>{day}</span>)}
        </div>
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={heatmapData}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            } else if(value.count < 10) return `color-scale-1`;
            else if(value.count < 30) return `color-scale-2`;
            else if(value.count < 50) return `color-scale-3`;
            else if(value.count < 80) return `color-scale-4`;
            else if(value.count < 100) return `color-scale-5`;

          }}
          tooltipDataAttrs={value => {
            return {
              'data-tip': `${format(new Date(value.date), 'yyyy-MM-dd')}: ${value.count} threats`
            };
          }}
          // showWeekdayLabels={true} 
          horizontal={true}

          gutterSize={8}
        />
      </div>
      <div className='description'>
          <h5>Less</h5>
          <span style={{backgroundColor: '#fa817e'}}></span>
          <span style={{backgroundColor: '#f6565c'}}></span>
          <span style={{backgroundColor: '#f22c35'}}></span>
          <span style={{backgroundColor: '#bf242f'}}></span>
          <span style={{backgroundColor: '#891f23'}}></span>
          <h5>More</h5>
      </div>
    </div>
  );
}

export default App;
