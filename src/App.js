import React from 'react';

function App() {
  return (
    <div className="App">
      {/* Embedding Storybook's UI iframe */}
      <iframe
        title="Storybook"
        src="http://localhost:6006" // Replace this URL with your Storybook's URL
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
        }}
      />
    </div>
  );
}

export default App;
