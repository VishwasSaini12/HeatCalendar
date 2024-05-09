import './HeatMap.css';
import React, { useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { startOfYear, endOfYear, format } from 'date-fns';
import 'react-calendar-heatmap/dist/styles.css';
function HeatMap() {
  const [show, setShow] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const startDate = startOfYear(new Date());
  const endDate = endOfYear(new Date());
  const heatmapData = [
    { date: '2024-01-01', count: 4 },
    { date: '2024-05-07', count: 25 },
    { date: '2024-11-01', count: 45 },
    { date: '2024-03-01', count: 78 },
    { date: '2024-12-01', count: 89 },
  ];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleMouseOver = (event, value) => {
    console.log(event.clientX);
      setShow(true);
      setPopupPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setShow(false);
  };
  return (
    <div className="heap-div">
      <h1 className='heap-box'>23 Threats in 2024</h1>
      <div className="calendar-border">
        <div className="week-labels">
          {daysOfWeek.map(day => <span key={day} className="day-label" style={{ color: 'grey ' }}>{day}</span>)}
        </div>
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={heatmapData}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            } else if (value.count < 10) return `color-scale-1`;
            else if (value.count < 30) return `color-scale-2`;
            else if (value.count < 50) return `color-scale-3`;
            else if (value.count < 80) return `color-scale-4`;
            else if (value.count < 100) return `color-scale-5`;

          }}
          tooltipDataAttrs={value => {
            return {
              'data-tip': `${format(new Date(value.date), 'yyyy-MM-dd')}: ${value.count} threats`
            };
          }}
          onMouseOver={(event, value) => handleMouseOver(event, value)}
          onMouseLeave={handleMouseLeave}
          horizontal={true}
          gutterSize={8}
        />
        <div
          style={{
            display: show ? 'flex' : 'none',
            position: 'absolute',
            left: `${popupPosition.x >= 1640 ? popupPosition.x - 180 : popupPosition.x - 100}px`,
            top: `${popupPosition.y + 10}px`,
            zIndex: 1000,
          }}
          className="popup">
          <h5>65 Flagged content on 7 oct</h5>
        </div>
      </div>
      <div className='description'>
        <h5>Less</h5>
        <span style={{ backgroundColor: '#fa817e' }}></span>
        <span style={{ backgroundColor: '#f6565c' }}></span>
        <span style={{ backgroundColor: '#f22c35' }}></span>
        <span style={{ backgroundColor: '#bf242f' }}></span>
        <span style={{ backgroundColor: '#891f23' }}></span>
        <h5>More</h5>
      </div>
    </div>
    );
}

export default HeatMap;
