'use client';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import React, { useEffect } from 'react';
import './clock.css';

const TimeComponent = () => {
  useEffect(() => {
     
    function updateTime() {
    let now = new Date();
    let yy = now.getFullYear();
    let day = now.toLocaleString('en-US', {
        weekday: 'short'
    });
    let time = now.toLocaleTimeString();
    console.log(`${day} ${time}`)

    document.querySelector('.day').textContent = day;
    document.querySelector('.time').textContent = time;
    document.querySelector('.time').textContent = yy + ' ';

    // year.textContent = yy + ' ';
}

setInterval(updateTime, 1000);

  }, []);

  return (
      <div className="box-top-div">
            <h1 className="day"></h1>
            <h1 className="time"></h1>
            <h1 className="year"></h1>
      </div>
  );
};

export default TimeComponent;