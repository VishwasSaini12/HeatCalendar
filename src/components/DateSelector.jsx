import React, { useState, useEffect } from 'react';
import './DateSelector.css';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const DateSelector = () => {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const [monthStartIndex, setMonthStartIndex] = useState(0);
    const [yearStartIndex, setYearStartIndex] = useState(0);
    const [dayStartIndex, setDayStartIndex] = useState(0);
    const [days, setDays] = useState(Array.from({ length: 31 }, (_, i) => i + 1));

    useEffect(() => {
        if (selectedYear !== null && selectedMonth !== null) {
            const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
            setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
        }
    }, [selectedYear, selectedMonth]);

    const years = Array.from({ length: 7 }, (_, i) => currentYear - i);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const navigate = (setter, current, direction, max, windowSize) => {
        const step = direction === 'next' ? 3 : -3;
        const newStart = Math.max(0, Math.min(current + step, max - windowSize));
        setter(newStart);
    };

    return (
        <div className="date-selector">
            {['years', 'months', 'days'].map((type, idx) => (
                <div key={type} className={`selector ${type}`}>
                    <AiOutlineLeft 
                        onClick={() => navigate(
                            idx === 0 ? setYearStartIndex : idx === 1 ? setMonthStartIndex : setDayStartIndex,
                            idx === 0 ? yearStartIndex : idx === 1 ? monthStartIndex : dayStartIndex,
                            'prev',
                            idx === 0 ? years.length : idx === 1 ? months.length : days.length,
                            idx === 0 || idx === 1 ? 3 : 13
                        )}
                        style={{ cursor: 'pointer' }} 
                    />
                    {(idx === 0 ? years.slice(yearStartIndex, yearStartIndex + 3) :
                      idx === 1 ? months.slice(monthStartIndex, monthStartIndex + 3).map((m, i) => ({ name: m, index: monthStartIndex + i })) :
                      days.slice(dayStartIndex, dayStartIndex + 13)).map(item => (
                        <button 
                            key={item}
                            onClick={() => {
                                idx === 0 ? setSelectedYear(item) :
                                idx === 1 ? setSelectedMonth(item.index) :
                                setSelectedDay(item);
                            }}
                            className={(idx === 0 && item === selectedYear) || 
                                       (idx === 1 && item.index === selectedMonth) || 
                                       (idx === 2 && item === selectedDay) ? 'active' : ''}
                        >
                            {item.name || item}
                        </button>
                    ))}
                    <AiOutlineRight 
                        onClick={() => navigate(
                            idx === 0 ? setYearStartIndex : idx === 1 ? setMonthStartIndex : setDayStartIndex,
                            idx === 0 ? yearStartIndex : idx === 1 ? monthStartIndex : dayStartIndex,
                            'next',
                            idx === 0 ? years.length : idx === 1 ? months.length : days.length,
                            idx === 0 || idx === 1 ? 3 : 13
                        )}
                        style={{ cursor: 'pointer' }} 
                    />
                </div>
            ))}
        </div>
    );
};

export default DateSelector;
