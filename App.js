//imported Create React App 
import React, {useEffect, useState} from "react";
//import Recipe.js
import Recipe from "./Recipe";
import './App.css';

//create function for app 
const App = () => {

//aunthentification with Edamam (ID and Key)
  const APP_ID = '';
  const APP_KEY = '';

  //create a state for Recipes
  const [recipes, setRecipes] = useState([]);

  //create a state for search
  const [search, setSearch] = useState("");

  //create a state for the default search
  const [query,setQuery] = useState('chicken')

  //every time page re-renders, useEffect will run
  useEffect( () => {
    //call function to run
    getRecipes();
  }, [query]);

  //function to get recipes
  const getRecipes = async () => {
      //query request from Edamam API
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  
//function everytime you enter something into the search - will run everytimes
  const updateSearch = e => {
    setSearch(e.target.value)
  };

  //function to run query once search has been submitted
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    //reset the search bar to an empty input once search is completed
    setSearch("");
  }



  return (
    //creating the search bar to get requests from
    <div className = "App">
      <form onSubmit = {getSearch} className = "search-form">
        <input className = "search-bar" type = "text" value={search} onChange={updateSearch}></input>
        <button className = "search-button" type = "submit">Search</button>
      </form>

      {/* outputs the map on the browser using  API data - we want 'Label', 'Calories' and 'Image'  */}
      {recipes.map(recipe => (
        <Recipe 
        //each food needs a unique key therefore choosing the name would be a good choice
        key = {recipe.recipe.label}
        title = {recipe.recipe.label} 
        //round the calories to 1 d.p
        calories = {recipe.recipe.calories.toFixed(0) + " cal"}
        nutrients = {recipe.recipe.totalDaily}
        ingredients = {recipe.recipe.ingredients}
        image = {recipe.recipe.image}/>
      
    
      ))}
     
        {/* //need to display object the same way we're displaying recipes  */}
        


    </div>
  )
};






export default App;
