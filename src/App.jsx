import './styles/App.css';
import Timer from './components/Timer';
import React from 'react';

class App extends React.Component {
  render() {
    const message = 'Acabou o intervalo!';
    return (
      <div className="App">
        <Timer alert={message} />
      </div>
    );
  }
}

export default App;
