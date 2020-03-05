import React from 'react';
import Header from './component/Header.jsx';
import Main from './component/Main.jsx';
import Jumbotron from './component/Jumbotron.jsx'

function App() {
  return (
    <div className="container">
    <Header />
    <Jumbotron />
    <Main />
    </div>
  );
}

export default App;
