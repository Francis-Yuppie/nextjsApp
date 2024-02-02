'use client';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import React, { useEffect } from 'react';
import './clock.css';

const ClockComponent = () => {
  useEffect(() => {
     
    let hours = document.querySelector('.hrs')
    let minutes = document.querySelector('.mm')
    let seconds = document.querySelector('.sc')
    let year = document.querySelector('.year')


    function updateClock() {
    const now = new Date();
    const hrs = now.getHours() % 12
    const mins = now.getMinutes()
    const sec = now.getSeconds()

    let hourAngle = (hrs + mins / 60) * 30;
    let minAngle = (mins + sec / 60) * 6;
    let secAngle = (sec * 6);

    hours.style.transform = `rotate(${hourAngle}deg)`;
    minutes.style.transform = `rotate(${minAngle}deg)`;
    seconds.style.transform = `rotate(${secAngle}deg)`;
}

setInterval(updateClock, 1000);

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
