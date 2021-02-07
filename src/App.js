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
    const [LoadType,setLoadType] = useState(Boolean(false))
    console.log(Data)
const search =(a)=>{
  const d=Data.filter(e=>e.name===a)
  
  setData(d)
  setLoadType(Boolean(true))
};
 return (
      <div>
        <Sample name={search}/>
        <Card data={Data}load={LoadType}/>
      </div>
    )
  }
export default App