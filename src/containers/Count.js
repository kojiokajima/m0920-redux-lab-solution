import React, { Component } from 'react'
import { connect } from 'react-redux'

class Count extends Component {

    componentDidMount(){
        setInterval(() => {
            this.props.onIncrement()   
        }, 500)
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h2>
                    Count: {this.props.cnt}
                </h2>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        cnt: state.counter.count
    }
}

const mapDispatch = (dispatch) => {
    return{
        onIncrement: () => dispatch({type: 'INCREMENT'}),
    }
}

export default connect(mapState, mapDispatch)(Count)
