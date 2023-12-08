import { Component } from "react";

class SetSate extends Component{

    state= {
        isSubscribe:false,
        btnText:'Subscribe'
    }

    handleClick =()=>{
        alert('hello')
        this.setState({
           
            isSubscribe :!this.state.isSubscribe,
            btnText:'Subscribed'
        })
    }
    render(){
        return(
            <>
            <button onClick={this.handleClick}>{this.state.btnText}</button>
            
            
            </>
        )
    }
}

export default SetSate