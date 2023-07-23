import React from 'react';



// function for recipes
// pull the props; 'Title', 'Calories' and 'Image' from App.js file into function 'Recipe'
const Recipe = ({ title, ingredients, nutrients, calories, image }) => {


    var arr = [];
    for (var i = 0; i < nutrients; i++) {
        arr.push(nutrients[i])
        console.log(arr)
    }

    return (
        //display for each recipe (Title, Calories and Image)
        <div>
            <h1>{title}</h1>

            <p>{arr}</p>



        {/* loop around to print list - map variable with HTML element variable */}
            
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))} 
            <h2>{calories}</h2>
            <img src= {image} alt=''/>
        </div>
    );
};

export default Recipe;