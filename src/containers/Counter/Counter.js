import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
                <button onClick={this.props.onStoreResults}>Store</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={this.props.onDeleteResults}>{strResult.val}</li>    
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => { //내가 Redux Store에서 사용할 state만 정의
    return { 
        ctr: state.counter,
        storedResults: state.results
    }
}

const mapDispatchToProps = dispatch => { //내가 사용할 action 함수만 정의
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onADDFive: (value) => dispatch({type: 'ADDVALUE', value: +value}),
        onSubtractFive: (value) => dispatch({type: 'SUBTRACTVALUE', value: +value}),
        onStoreResults: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResults: () => dispatch({type: 'DELETE_RESULT'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);