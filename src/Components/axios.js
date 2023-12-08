import axios from "axios";
import { Component } from "react";

class Axios extends Component{

    state ={
        products:[]
    }

    handleClick = ()=>{
     axios.get('https://fakestoreapi.com/products') 
     .then(response=>{
            this.setState(
                {
                    products:response.data
                }
                )
     })  
    }
    handleRemove = (productId)=>{        
        alert('Deleting the item');
        const remove = this.state.products.filter(product =>product.id !== productId) 
                this.setState(
                    {
                        products:remove
                    }
                    )
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <div className="d-flex flex-wrap">
                {
                    this.state.products.map((ele)=>{
                        return(
                            <>
                            <div className="card w-25" style={{width:'100'}} >
  <img src={ele.image} style={{width:'120px' , height:'100'}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{ele.title}</h5>
    
  </div>
  <div class="card-body">
    <button onClick={()=>{this.handleRemove(ele.id)}}>Remove</button>
  </div>
</div>
                            </>    
                        )
                    })
                }
                </div>                
            </div>
        )
    }
}

export default Axios