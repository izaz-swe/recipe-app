import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css"
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
function App() {
  const [foods, setFoods] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div className="App">
      <Nav/>
      <Search setFoods={setFoods}/>
      <Container>
        <InnerContainer>
          <FoodList foods={foods} setFoodId = {setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId = {foodId}/>
        </InnerContainer>
      </Container>
      
    </div>
  )
}

export default App
