import React, { useState, useEffect } from 'react';
import './DateSelector.css';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const DateSelector = () => {
    const [selectedYear, setSelectedYear] = useState();
    const [selectedMonth, setSelectedMonth] = useState();
    const [selectedDay, setSelectedDay] = useState();
    const [monthStartIndex, setMonthStartIndex] = useState(0);
    const [yearStartIndex, setYearStartIndex] = useState(0);
    const [dayStartIndex, setDayStartIndex] = useState(0);
    const [days, setDays] = useState([]);
    useEffect(() => {
        let daysInMonth = 31;
        if (selectedMonth !== null && selectedMonth >= 0 && selectedMonth < 12) {
            daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
        }
        setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
    }, [selectedYear, selectedMonth]);


    const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const selectYear = (year) => {
        setSelectedYear(year);
        setYearStartIndex(0);
    };
    const selectMonth = (monthIndex) => {
        setSelectedMonth(monthIndex);
        setMonthStartIndex(0);
    };
    const selectDay = (day) => setSelectedDay(day);

    const handleNextMonths = () => {
        setMonthStartIndex(prevIndex => Math.min(prevIndex + 3, months.length - 3));
    };

    const handlePreviousMonths = () => {
        setMonthStartIndex(prevIndex => Math.max(prevIndex - 3, 0));
    };

    const handleNextYears = () => {
        setYearStartIndex(prevIndex => Math.min(prevIndex + 3, years.length - 3));
    };

    const handlePreviousYears = () => {
        setYearStartIndex(prevIndex => Math.max(prevIndex - 3, 0));
    };

    const handleNextDays = () => {
        setDayStartIndex(prevIndex => Math.min(prevIndex + 3, days.length - 3));
    };

    const handlePreviousDays = () => {
        setDayStartIndex(prevIndex => Math.max(prevIndex - 3, 0));
    };

    return (
        <div className="date-selector">
            <div className="selector years">
                <AiOutlineLeft onClick={handlePreviousYears} style={{ paddingInlineEnd: '30px', cursor: 'pointer', pointerEvents: yearStartIndex === 0 ? 'none' : null }} />
                {years.slice(yearStartIndex, yearStartIndex + 3).map(years => (
                    <button key={years} onClick={() => selectYear(years)} className={years === selectedYear ? 'active' : ''}>
                        {years}
                    </button>
                ))}
                <AiOutlineRight onClick={handleNextYears} style={{ paddingInlineStart: '30px', cursor: 'pointer', pointerEvents: yearStartIndex >= years.length - 3 ? 'none' : null }} />
            </div>
            <div className="selector months">
                <AiOutlineLeft onClick={handlePreviousMonths} style={{ paddingInlineEnd: '30px', cursor: 'pointer', pointerEvents: monthStartIndex === 0 ? 'none' : null }} />
                {months.slice(monthStartIndex, monthStartIndex + 3).map((month, index) => (
                    <button key={month} onClick={() => selectMonth(index)} className={index === selectedMonth ? 'active' : ''}>
                        {month}
                    </button>
                ))}
                <AiOutlineRight onClick={handleNextMonths} style={{ paddingInlineStart: '30px', cursor: 'pointer', pointerEvents: monthStartIndex >= months.length - 3 ? 'none' : null }} />
            </div>
            <div className="selector date">
                <AiOutlineLeft onClick={handlePreviousDays} style={{ paddingInlineEnd: '30px', cursor: 'pointer', pointerEvents: dayStartIndex === 0 ? 'none' : null }} />
                {days.slice(dayStartIndex, dayStartIndex + 13).map(days => (
                    <button key={days} onClick={() => selectDay(days)} className={days === selectedDay ? 'active' : ''}>
                        {days}
                    </button>
                ))}
                <AiOutlineRight onClick={handleNextDays} style={{ paddingInlineStart: '30px', cursor: 'pointer', pointerEvents: dayStartIndex >= days.length - 13 ? 'none' : null }} />
            </div>
        </div>
    );
};

export default DateSelector;
