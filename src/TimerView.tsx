import * as React from 'react';
import { observer } from 'mobx-react';
import AppState from './AppState'

@observer
export default class TimerView extends React.Component<{ appState: AppState }, {}> {
  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.appState.timer}
        </button>
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};
