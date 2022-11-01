import './styles/App.css';
import Timer from './components/Timer';
import React from 'react';
import sound from './assets/emergency-alarm.wav'

class App extends React.Component {
  render() {
    const message = 'Acabou o intervalo!';
    const audio = new Audio(sound);
    return (
      <div className="App">
        <Timer alert={message} sound={audio} />
      </div>
    );
  }
}

export default App;
