import './App.css'
import Card from './Components/Card';
import Sample from './Components/Sample';
import Axios from 'axios';
import React,{useEffect,useState} from 'react'
const App = ()=>{
  const [Data, setData] = useState([]);

useEffect(() => {
 Axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>
 setData(res.data)
 ); 
     
    }, []);
    console.log(Data)
const search =(a)=>{
  const d=Data.filter(e=>e.name===a)
  
  setData(d)
};
 return (
      <div>
        <Sample name={search}/>
        <Card data={Data}/>
      </div>
    )
  }
export default App