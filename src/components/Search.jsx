import { useEffect, useState } from "react";
const API_KEY = "1d8024e4ebd54bafa9b672987814b964";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
import styles from "./search.module.css";

export default function Search({setFoods}){
  const [query, setQuery] = useState("pizza");
  useEffect(()=> {
    async function fetchFood(){
      const res = await fetch(`${URL}?apiKey=${API_KEY}&query=${query}`);
      const data = await res.json();
      // console.log(data.results)
      setFoods(data.results);
    }
    fetchFood();
  }, [query]);
  return(
    <div className={styles.searchContainer} >
      <input className={styles.input} value={query} onChange={(e)=> setQuery(e.target.value)} type="text"/>
    </div>
  );
}