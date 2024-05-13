import React from 'react';
import './Bar.css';

const Bar = ({ level }) => {
    const position = level + '%';

    return (
        <div className="risk-level-container">
            <h1>Overall Risk Level</h1>
            <div className='risk-level-bar-container'>
                <div className="risk-level-bar one" style={{ background: 'linear-gradient(90deg, #FFE700 0%, #998B00 100%)' }}></div>
                <div className="risk-level-bar two" style={{ background: 'linear-gradient(90deg, #FF8C00 0%, #995400 100%)' }}></div>
                <div className="risk-level-bar three" style={{ background: 'linear-gradient(90deg, #F12D2D 0%, #8B1A1A 100%)' }}></div>
                <div className="risk-level-pointer" style={{ left: position }}></div>
            </div>
            <div className='risk-level-bar-label' style={{
                width: '648px',
                height: '10px',
                gap: '0px',
                justifyContent: 'space - between',
                margin: 0
            }}>
                <h5 className='one'>Low</h5>
                <h5 className='two'>Medium</h5>
                <h5 className='three'>High</h5>
            </div>
        </div>
    );
}

export default Bar;
