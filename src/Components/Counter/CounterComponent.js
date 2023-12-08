import { Component } from "react"







class Counter extends Component{

    state ={
        count:0
    }

    handleIncrement = ()=>{

        this.setState({
            count: this.state.count+1
        })

    }

    handleDecrement = ()=>{

        this.setState({
            count: this.state.count-1
        })

    }

    handleReset = ()=>{

        this.setState({
            count: 0
        })

    }


    render(){
        return(
            <>
            <h2>{this.state.count}</h2>
            <button value='increment' onClick={this.handleIncrement}>Increment</button>
            
            <button value={'decrement'} onClick={this.handleDecrement}>Decrement</button>
            <button onClick={this.handleReset}>Reset</button>
            </>
        )
    }


}


export default Counter
 