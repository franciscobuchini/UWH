// POOL.JSX
import React, { useState, useRef, useEffect } from 'react';

export default function Pool() {
  const [PuckPosition, setPuckPosition] = useState({ x: 0, y: 0 });
  const PoolGrid_useRef = useRef(null);

  const updatePuckPosition = () => {
    const PoolGrid = PoolGrid_useRef.current;
    if (PoolGrid) {
      const rect = PoolGrid.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      setPuckPosition({ x: centerX, y: centerY });
    }
  };

  useEffect(() => {
    updatePuckPosition();
    window.addEventListener('resize', updatePuckPosition);
    return () => {
      window.removeEventListener('resize', updatePuckPosition);
    };
  }, []);

  const PuckClick = (event) => {
    const PoolGrid = PoolGrid_useRef.current;
    const rect = PoolGrid.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    setPuckPosition({ x: offsetX, y: offsetY });
  };

  return (
    <div className="Pool">
      <div className="Pool_Grid" onClick={PuckClick} ref={PoolGrid_useRef}>
        <div id="Pool_Area10" className="Pool_Area"> 10 </div>
        <div id="Pool_Area11" className="Pool_Area"> 11 </div>
        <div id="Pool_Area12" className="Pool_Area"> 12 </div>
        <div id="Pool_Area7" className="Pool_Area"> 7 </div>
        <div id="Pool_Area8" className="Pool_Area"> 8 </div>
        <div id="Pool_Area9" className="Pool_Area"> 9 </div>
        <div id="Pool_Area4" className="Pool_Area"> 4 </div>
        <div id="Pool_Area5" className="Pool_Area"> 5 </div>
        <div id="Pool_Area6" className="Pool_Area"> 6 </div>
        <div id="Pool_Area1" className="Pool_Area"> 1 </div>
        <div id="Pool_Area2" className="Pool_Area"> 2 </div>
        <div id="Pool_Area3" className="Pool_Area"> 3 </div>

        <div className="Pool_Puck" style={{ left: `${PuckPosition.x}px`, top: `${PuckPosition.y}px` }}>
        </div>
      </div>
    </div>
  );
}