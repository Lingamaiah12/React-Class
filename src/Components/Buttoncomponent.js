import { render } from "@testing-library/react"



const ButtonComponent = ({userdata})=>{
    return(
        <>
        <button style={{
           color:userdata.color
        
            
        }}>{userdata.name}</button>

        
        </>
    )
}

export default ButtonComponent