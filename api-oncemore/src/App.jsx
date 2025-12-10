import { useEffect , useState } from "react";
import Card from "./components/Cards"
export default function App(){
  const [data, setData]=useState([]);



  async function apiFetching(){
    const fetcher= await fetch("https://api.thecatapi.com/v1/images/search?limit=40");
    const response= await fetcher.json(); 
    const final = response.map((item)=> (
    {naam:item.id,
    img:item.url}
  ))
  setData(final);
}
useEffect( ()=>{
  apiFetching();} , []) ;











  return (
  <>
  {data.map((item)=> (
  <div key={item.naam}>
    <Card  img={item.img} />
    </div>))}
  
  </>);
}