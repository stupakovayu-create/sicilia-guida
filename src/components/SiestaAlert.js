/* eslint-disable */
import React, { useState, useEffect } from 'react';

const SiestaAlert = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [debugTime, setDebugTime] = useState("");
  const [rawMinutes, setRawMinutes] = useState(0);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      setDebugTime(`${formattedHours}:${formattedMinutes}`);
      setRawMinutes(totalMinutes);

      // Сиеста: 13:30 (810 мин) — 16:30 (990 мин)
      const siestaStart = 13 * 60 + 30;
      const siestaEnd = 16 * 60 + 30;

      if (totalMinutes >= siestaStart && totalMinutes <= siestaEnd) {
        setShowAlert(true);
      } else {
        setShowAlert(false); // Оставлено true для тестов
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!showAlert || isDismissed) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100vw',
      backgroundColor: '#d46a6a',
      color: 'white',
      padding: '12px 45px 12px 20px',
      paddingTop: 'calc(10px + env(safe-area-inset-top))', 
      fontSize: '15px',
      fontWeight: 'bold',
      textAlign: 'center',
      zIndex: 1000,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      borderBottomLeftRadius: '12px',
      borderBottomRightRadius: '12px'
    }}>
      <span>⏳ Сиеста (Время: {debugTime} | Минуты: {rawMinutes})! Магазины закрыты до 16:30.</span>
      
      <button 
        onClick={() => setIsDismissed(true)}
        style={{
          position: 'absolute',
          right: '15px',
          top: 'calc(50% + (env(safe-area-inset-top) / 2))',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '20px',
          cursor: 'pointer',
          padding: '5px 10px',
          lineHeight: '1',
          opacity: '0.8',
          WebkitTapHighlightColor: 'transparent',
          userSelect: 'none'
        }}
      >
        ×
      </button>
    </div>
  );
};

export default SiestaAlert;
