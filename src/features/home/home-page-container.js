import React, { useState } from 'react';

import HomePageComponent from './home-page-component.js';

function HomePage() {
  const [count, setCount] = useState(0);

  function handleIncrementClick() {
    setCount(c => c + 1);
  }

  const props = {
    count,
    onIncrementClick: handleIncrementClick,
  };

  return <HomePageComponent {...props} />;
}

export default HomePage;
