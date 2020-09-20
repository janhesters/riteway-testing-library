import React from 'react';

function HomePage({ count, onIncrementClick = () => {} }) {
  return (
    <main>
      <p className="count" data-testid="count">
        {count}
      </p>
      <button className="increment-button" onClick={onIncrementClick}>
        Increment
      </button>
    </main>
  );
}

export default HomePage;
