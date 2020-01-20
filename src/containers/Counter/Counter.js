import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionType from '../../store/action';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 10" clicked={this.props.onADD}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSub}  />
                <button onClick={() => this.props.onResultAdd(this.props.ctr)}>Store ME</button>
                <ul>
                    {this.props.res.map(result => (
                        <li key={result.id}
                            onClick={() => this.props.onResultDel(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.count.counter,
        res: state.resul.result
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: actionType.INCREMENT}),
        onDecrement: () => dispatch({type: actionType.DECREMENT}),
        onADD      : () => dispatch({type: actionType.ADD, val: 10}),
        onSub      : () => dispatch({type: actionType.SUB, val: 15}),
        onResultAdd: (counter) => dispatch({type: actionType.RES_ADD, val: counter}),
        onResultDel: (id) => dispatch({type: actionType.RES_DEL, id: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);