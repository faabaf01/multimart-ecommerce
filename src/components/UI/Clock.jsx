import React, { useState, useEffect } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const countDown = () => {
    const destination = new Date("Feb 20, 2023").getTime();
    let interval = null;

    const updateTime = () => {
      const now = new Date().getTime();
      const different = destination - now;

      if (destination < 0) {
        clearInterval(interval);
        return;
      }

      //number of days between the current time and the destination time
      const days = Math.floor(different / (1000 * 60 * 60 * 24));

      //remaining number of milliseconds after the days have been removed
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      //remaining number of milliseconds after the hours have been removed
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));

      //remaining number of milliseconds after the minutes have been removed
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    };
    //execute every 1 seconds
    interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  };

  useEffect(countDown, []);

  return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
      <div className="clock__data text-white d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="fs-3 mb-2">{days}</h1>
          <h5 className="fs-6">Days</h5>
        </div>
        <span className="fs-3">:</span>
      </div>
      <div className="clock__data text-white d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="fs-3 mb-2">{hours}</h1>
          <h5 className="fs-6">Hours</h5>
        </div>
        <span className="fs-3">:</span>
      </div>
      <div className="clock__data text-white d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="fs-3 mb-2">{minutes}</h1>
          <h5 className="fs-6">Minutes</h5>
        </div>
        <span className="fs-3">:</span>
      </div>
      <div className="clock__data text-white d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="fs-3 mb-2">{seconds}</h1>
          <h5 className="fs-6">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
