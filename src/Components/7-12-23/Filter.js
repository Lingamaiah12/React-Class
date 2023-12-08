import { Component } from "react";



class FilterDesignation extends Component{

    state ={
        data:[]
        
    }
    dev =   [ {
        name:'linga',
        designation:'React developer'
    },
    {
        name:'Krishna',
        designation:'React developer'
    },
    {
        name:'Sai',
        designation:'Java developer'
    },
    {
        name:'hari',
        designation:'Angular developer'
    },
    {
        name:'ajay',
        designation:'React developer'
    },
    {
        name:'gane',
        designation:'Java developer'
    }
    
]
    handleReact = () =>{

       let react = this.dev.filter(ele => ele.designation == 'React developer')
       this.setState({
        data:react
       })   
    }

    handleAngular = () =>{

        let angular = this.dev.filter(ele => ele.designation == 'Angular developer')
        this.setState({
         data:angular
        })   
     }
     handleJava = () =>{

        let java = this.dev.filter(ele => ele.designation == 'Java developer')
        this.setState({
         data:java
        })   
     }
     All = () =>{
            this.setState({
                data:this.dev
               })
     }

    render(){
        return(
            <div style={{marginLeft:'300px' , marginTop:'150px'}}>
            <button onClick={this.handleReact} className="btn btn-primary me-1">React developer</button>
            <button onClick={this.handleAngular} className="btn btn-primary me-1">Angular developer</button>
            <button onClick={this.handleJava} className="btn btn-primary me-1">Java developer</button>
            <button onClick={this.All} className="btn btn-primary">All Developers</button>
            <div>
                <table style={{width:'100'}} className="table w-50">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(ele=>{
                                return(
                                <tr>
                                    <td>{ele.name}</td>
                                    <td>{ele.designation}</td>
                                </tr>
                               
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

export default FilterDesignation