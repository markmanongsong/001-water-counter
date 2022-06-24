import React from 'react';

function Water({ increase, reset, theLevel }) {
  const triggerIncrease = () => {
    increase();
  };

  const triggerReset = () => {
    reset();
  };

  const waterStyle = {
    height: `${theLevel}%`,
  };
  return (
    <>
      <div className="cup">
        <div className="water" style={waterStyle}></div>
        Water
      </div>
      <div>
        {theLevel <= 100 ? (
          <button className="Plus" onClick={triggerIncrease}>
            +
          </button>
        ) : (
          <button className="Plus" disabled>
            The Cup is full
          </button>
        )}
        <div>
          <button className="Plus" onClick={triggerReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Water;
