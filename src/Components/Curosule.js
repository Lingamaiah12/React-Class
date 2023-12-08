import { Component } from "react";
import c1 from './Assests/C1.webp'
import c2 from './Assests/C2.webp'
import c3 from './Assests/C3.webp'


class Curosule extends  Component{
    


    data = 
        [

            {
                name:'linga',
                age:25
            },
            {
                name:'Ajay',
                age:26
            },
            {
                name:'Gane',
                age:29
            },
            {
                name:'Kajal',
                age:20
            }

        ]
    

    render(){
        return(
            <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={c1} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={c2} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={c3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 
                    
                
            
            
            </>
        )
    }
}

export default Curosule