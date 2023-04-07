import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4'
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "5ea2f759";
  const MY_KEY = "24ef297dd1750cc0db5bd2d2851eb41d";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [inquire, setInquire] = useState('avocado')

  useEffect(() => {
    const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${inquire}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data)
    setMyRecipes(data.hits);
  }
  getRecipe();
  }, [inquire])

  const myRecipeSearch = (e) => {
    console.log(e.target.value)
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setInquire(mySearch);
  }




  return (
  <div className="App">
    <div className="container">
    <video autoPlay muted loop>

    <source src={video} type="video/mp4" /></video>
      <h1>Find a Recipe</h1>
    </div>

    <div className='container'>
      <form onSubmit={finalSearch}>
        <input className="search" placeholder='Search ...' onChange={myRecipeSearch} value={mySearch}>
        
        </input>
      </form>
    </div>
      <div className='container'>
        <button onClick={finalSearch}>
          <img src="https://img.icons8.com/color/256/fry.png" className="icons"width="30px" alt="food"/>
        </button>
      </div>

      {myRecipes.map(element => (
        <MyRecipesComponent
        label={element.recipe.label} 
        image={element.recipe.image} 
        calories={element.recipe.calories} 
        dietLabels={element.recipe.dietLabels}
        ingredients={element.recipe.ingredientLines}/>
      ))}


    </div>

  );
}

export default App;
