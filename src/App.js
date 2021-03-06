import React, {useState} from 'react';

function App () {
  const [displayDescription, toggleDescription] = useState(false);

  function handleToggleClick () {
    toggleDescription(!displayDescription)
  }

  return (
    <div className="app">
      <h1>App loaded</h1>
      <button onClick={handleToggleClick}>See Description</button>
      {displayDescription &&
        <div className="description">
          <h2>Sick App!</h2>
          <p>Here&apos;s your super slick application homie!</p>
        </div>
      }
    </div>
  );
}

export default App;
