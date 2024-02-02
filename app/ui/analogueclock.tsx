'use client';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import React, { useEffect } from 'react';
import './clock.css';

const ClockComponent = () => {
useEffect(() => {
    const hours = document.querySelector('.hrs');
    const minutes = document.querySelector('.mm');
    const seconds = document.querySelector('.sc');
    const year = document.querySelector('.year');

    function updateClock() {
        const now = new Date();
        const hrs = now.getHours() % 12;
        const mins = now.getMinutes();
        const sec = now.getSeconds();

        let hourAngle = (hrs + mins / 60) * 30;
        let minAngle = (mins + sec / 60) * 6;
        let secAngle = sec * 6;

        if (hours && minutes && seconds) {
            hours.style.transform = `rotate(${hourAngle}deg)`;
            minutes.style.transform = `rotate(${minAngle}deg)`;
            seconds.style.transform = `rotate(${secAngle}deg)`;
        }
    }

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
}, []);


  return (
      <div className="glass-clock">
          <div className="clock">
                <span className="clock-span"></span>
                  <span className="clock-span"></span>
                  <span className="clock-span"></span>
                  <span className="clock-span"></span>
                  <span className="clock-span"></span>
                  <span className="clock-span"></span>
                  <span className="clock-span"></span>
                  <span className="clock-span"></span>
                  <span className="clock-span"></span>
                  <span className="clock-span"></span>
                  <span className="clock-span"></span>
                  <span className="clock-span"></span>

                  <div className="hours">
                      <div className="hand hrs"></div>
                  </div>
                  <div className="mins">
                       <div className="hand mm"></div>
                  </div>
                  <div className="secs">
                      <div className="hand sc"></div>
                  </div>

                    </div>
                </div>
  );
};

export default ClockComponent;
