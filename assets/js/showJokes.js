//import { fetchJokes } from '/home/lewifzz/Jokes-Website/assets/js/fetchScript'

'use strict'
//Make the jokes appear on screen
document.addEventListener('DOMContentLoaded', ()=> {
    //Elements of the DOM
    let type = document.getElementById('type');
    let jokes = document.getElementById('joke');
    let setup = document.getElementById('setup');
    let jokeButton = document.getElementById('fetchJoke');

    //Button event to show the jokes on the screen
    jokeButton.addEventListener('click', async () =>{
        let joke = await fetchJokes(); //Call the fetch jokes function
        if (joke.error !== true) { // Check if the joke fetch was successful
            console.log('Loading joke');
    
            // Clear the HTML
            type.innerHTML = '';
            setup.innerHTML = '';
            jokes.innerHTML = '';
    
            // Fill it with jokes
            type.innerHTML = joke.category	 || 'No setup available'; // Fallback in case setup is missing
            setup.innerHTML = joke.setup || 'No setup available'; // Fallback in case setup is missing
            jokes.innerHTML = joke.delivery || 'No delivery available'; // Fallback in case delivery is missing
        } else {
            console.error('Failed to load joke:', joke.message);
            setup.innerHTML = 'Failed to fetch joke';
            jokes.innerHTML = joke.message || 'Unknown error';
        }
    });

});


// Script that fetches jokes from the Joke API
const fetchJokes = async () => {
    try {
        // The API URL
        const url = 'https://v2.jokeapi.dev/joke/Any?type=twoPart';
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("The fetch was unsuccessful");
        }

        console.log('Successful fetch');
        
        const joke = await response.json();
        
        return joke;

    } catch (error) {
        console.error('Error:', error.message);
    }
};