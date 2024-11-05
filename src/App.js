import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import RecipeList from  './components/RecipeList';
import './App.css';


function App(){
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async(query) =>{
    const apiKey= 'LuB1UVjlBaqGvrCvyJ9tZw==yLOxLNyQSpSmXW0e';
    const url = `https://api.api-ninjas.com/v1/recipe?query=${query}`;


    try{
    const response= await axios.get(url,{
      headers: {
        'X-Api-Key' : apiKey,
      },
    });
    setRecipes(response.data);
  }catch(error){
    console.error('Error fetching recipes:', error);
  }
};

  return (
    <div className='App'>
      <h1> Recipe Finder</h1>
      <SearchBar onSearch= {fetchRecipes}/>
      <RecipeList recipes = {recipes} />
    </div>
  );
}

export default App;