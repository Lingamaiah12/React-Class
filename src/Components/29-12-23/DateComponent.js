import { Component } from "react"



class DateComponent extends Component{


    
    
    render(){

        return(
            <div>
                <h1>Good Morning! {this.props.user} today date was {this.props.day}</h1>
            </div>
        )
    }
}

export default DateComponent