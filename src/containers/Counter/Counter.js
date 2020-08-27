import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreator from '../../Store/Action/action';

class Counter extends Component {    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onADDFive(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractFive(5)}  />
                <hr />
                <button onClick={() => this.props.onStoreResults(this.props.ctr)}>Store</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResults(strResult.id)}>{strResult.val}</li>    
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => { //내가 Redux Store에서 사용할 state만 정의
    return { 
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => { //내가 사용할 action 함수만 정의
    return {
        onIncrementCounter: () => dispatch(actionCreator.increment()),
        onDecrementCounter: () => dispatch(actionCreator.decrement()),
        onADDFive: (value) => dispatch(actionCreator.addValue(value)),
        onSubtractFive: (value) => dispatch(actionCreator.subtractValue(value)),
        onStoreResults: (cnt) => dispatch(actionCreator.storeResult(cnt)),
        onDeleteResults: (id) => dispatch(actionCreator.deleteResult(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);