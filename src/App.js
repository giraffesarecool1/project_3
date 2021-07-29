import React from 'react';
import './App.css';
import SearchInputForm from './SearchInputForm.js';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <p>
         Welcome to my unsplash stock image searcher. Type your query term to begin.
        </p>
      </header>
      <SearchInputForm />
    </div>
    <footer>Copyright Juno 2021</footer>
    </React.Fragment>
  );
}

export default App;
