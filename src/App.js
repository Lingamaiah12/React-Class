import logo from './logo.svg';
import './App.css';
import TableComponent from './Components/TableComponent';
import TableData from './Components/TableData';
import FormComponent from './Components/FormComponent';
import ClassComponent from './Components/ClassComponent';

import FunctionProp from './Components/Props/FunctionProp';
import ClassProp from './Components/Props/ClassProp';
import ButtonComponent from './Components/Buttoncomponent';
import SetSate from './Components/SetState';
import Curosule from './Components/Curosule';
import Cards from './Components/Cards';
import Axios from './Components/axios';
import Header from './Components/Shopping/ShoppingHeader';
import Products from './Components/Shopping/Products';
import DateComponent from './Components/29-12-23/DateComponent';
import { getDay } from './Components/29-12-23/DateFunctions';
import Timer from './Components/6-12-23/TimerFun';
import Counter from './Components/Counter/CounterComponent';
import FilterDesignation from './Components/7-12-23/Filter';
import Curosouel from './Components/6-12-23/Curosouel';




function App(){

  const userdetails={
    name:'linga',
    age:22
    }

    var name = 'linga'
    let hour = new Date().getDay()
  return (
    <div>
     
    {/* <FunctionProp data = {userdetails}/> */}


{/* 
    <ButtonComponent userdata={{
      name:'Login',
      color:'red',
      height:100,
      width:100
    }
    }/> */}


  {/* <SetSate/> */}


  {/* <Curosule/>
   <Cards/> */}
    {/* <Axios/> */}
    {/* <Header/>
   <Products/> */}
   


  {/* <DateComponent user={'Linga'} day={getDay(hour)}/> */}
  {/* <Counter/> */}
  <Curosouel/>
   <Products/>
   
   
   
   <FilterDesignation/>
    </div>
  );
}

export default App;
