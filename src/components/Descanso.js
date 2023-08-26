import React from 'react';
import '../styles/countdown.css'
import CountDown from './CountDown';

const Descanso = () => {
    const targetDate = new Date('2023-09-30T16:29:59').toISOString(); // Cambia la fecha objetivo

  return (
    <div className="App">
      <CountDown targetDate={targetDate} />
    </div>

    );
};

export default Descanso;