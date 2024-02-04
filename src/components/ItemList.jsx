import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading
        ? "Loading..."
        : food.extendedIngredients.map((item) => <Item key={item.id}item={item}/>)}
    </div>
  );
}
