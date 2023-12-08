import { Component } from "react"


class ClassProp extends Component{
    render(){
        return(
            <div>
                <h1>Hello! {this.props.name}</h1>
                
            </div>
        )
    }
}


export default ClassProp