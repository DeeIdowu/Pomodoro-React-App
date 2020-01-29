import React from "react";
import BreakInterval from "../src/components/BreakInterval/BreakInterval";
import SessionInterval from "../src/components/SessionInterval/SessionInterval";
import TimerInterval from "../src/components/TimerInterval/Timer";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakInterval: 10,
      sessionInterval: 35,
      timerMinute: 35,
      isPlay: false
    };

    this.onBreakIntervalChange = this.onBreakIntervalChange.bind(this);
    this.onSessionIntervalChange = this.onSessionIntervalChange.bind(this);
    this.onTimerMinuteChange = this.onTimerMinuteChange.bind(this);
    this.onPlayChange = this.onPlayChange.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
  }

  onPlayChange(isPlay) {
    this.setState({
      isPlay: isPlay
    });
  }

  onBreakIntervalChange(newBreakLength) {
    this.setState({
      breakInterval: newBreakLength
    });
  }

  onSessionIntervalChange(newSessionLength) {
    this.setState({
      sessionInterval: newSessionLength,
      timerMinute: newSessionLength
    });
  }

  onTimerMinuteChange(minuteChange) {
    this.setState({
      timerMinute: minuteChange
    });
  }

  onResetTimer() {
    this.setState({
      sessionInterval: 35,
      timerMinute: 35,
      breakInterval: 10
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Pomodoro Clock</h2>
        <section className="length-container">
          <BreakInterval
            onBreakIntervalChange={this.onBreakIntervalChange}
            breakInterval={this.state.breakInterval}
            isPlay={this.state.isPlay}
          />
          <SessionInterval
            onSessionIntervalChange={this.onSessionIntervalChange}
            sessionInterval={this.state.sessionInterval}
            isPlay={this.state.isPlay}
          />
        </section>
        <TimerInterval
          sessionInterval={this.state.sessionInterval}
          timerMinute={this.state.timerMinute}
          onTimerMinuteChange={this.onTimerMinuteChange}
          breakInterval={this.state.breakInterval}
          onPlayChange={this.onPlayChange}
          resetTimer={this.onResetTimer}
        />
      </div>
    );
  }
}

export default App;
