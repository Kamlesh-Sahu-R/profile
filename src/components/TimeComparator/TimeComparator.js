import { useEffect, useState } from 'react';
import './TimeComparator.css';

const TimeComparator = () => {
  const [localTime, setLocalTime] = useState(new Date());
  const [istTime, setIstTime] = useState(new Date());

  const getISTTime = () => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const istOffset = 5.5 * 60 * 60 * 1000;
    return new Date(utc + istOffset);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const local = new Date();
      const ist = getISTTime();
      setLocalTime(local);
      setIstTime(ist);
    }, 1000); // update every second

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time-wrapper">
      <h2>Local vs IST Time Comparator</h2>
      <table className="time-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Local Time</th>
            <th>🇮🇳 IST Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Date</td>
            <td>{localTime.toLocaleDateString()}</td>
            <td>{istTime.toLocaleDateString()}</td>
          </tr>
          <tr>
            <td>Time</td>
            <td>{localTime.toLocaleTimeString()}</td>
            <td>{istTime.toLocaleTimeString()}</td>
            </tr>
          <tr>
            <td>Milliseconds</td>
            <td>{localTime.getMilliseconds()}</td>
            <td>{istTime.getMilliseconds()}</td>
          </tr>
        </tbody>
      </table>
      <p><strong>Difference:</strong> {Math.abs(localTime.getTime() - istTime.getTime())} ms</p>
    </div>
  );
};

export default TimeComparator;

