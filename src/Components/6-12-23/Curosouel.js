import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import c1 from '../Assests/C1.webp'
import c2 from '../Assests/C2.webp'
import c3 from '../Assests/C3.webp'

import c5 from '../Assests/C5.webp'

class DemoCarousel extends Component {


    state ={items:[c1,c2,c3]}
    

    handleImages = () =>{
        let data = [...this.state.items,c5]
        console.log(data);
        this.setState({
            items:data
        })
    }

    render() {
        return (
            <>
            <Carousel>
                {
                    this.state.items.map(ele=>{
                        return(
                            <>
                            <img src={ele}/>
                            </>
                        )
                    })
                }
                
            </Carousel>

            <button onClick={this.handleImages}>Add Image to carousel</button>
            
            
            
            </>
            
        );
    }
}


export default DemoCarousel