'use strict';

// Script that fetches jokes from the Joke API
export const fetchJokes = async (jokeType) => {
    try {
        // The API URL
        const url = 'https://v2.jokeapi.dev/joke/'+jokeType;
        
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


