import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class App extends Component {

    render () {
        return (
            <div>
                Counter: {this.props.store.count} <br />
                <button onClick={this.handleInc}>+</button>
                <button onClick={this.handleDec}>-</button>
                <br />
                <div>
                    Duplicated value (computed) = {this.props.store.duplicateValue}
                </div>
            </div>
        );

    }

    handleInc = () => {
        this.props.store.increment();
    };

    handleDec = () => {
        this.props.store.decrement();
    };
}

export default App;
