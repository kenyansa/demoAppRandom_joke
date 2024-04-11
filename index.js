//DOMContentLoaded event => it waits for DOM content to be loaded fully before 
//executing the code we have provided it.
document.addEventListener('DOMContentLoaded', () => {
    //we are initializing the selector elementts/targets
    const getJokeBtn = document.getElementById('getJokeBtn'); //we want tto access the button
    const jokeContainer = document.getElementById('jokeContainer'); //we want to access the new div, where api data will land
    const header2 = document.getElementById('header2'); // Get the h1 element by its id

    // Function to fetch a joke
    const fetchJoke = async () => {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
            if (!response.ok) {
                throw new Error('Failed to fetch joke');
            }
            const data = await response.json();
            const joke = data[0].setup + ' ' + data[0].punchline;
            jokeContainer.textContent = joke;
            
            //error handling
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    };

    // Event handler for the "Get Joke" button click
    const handleClick = () => {
        fetchJoke();
    };

    // Event handler for the h1 element hover
    const handleHover = () => {
        header2.style.color = 'blue'; // Change the color to blue on hover
    };

    // Event handler to revert the color back to its original color when mouse leaves
    const handleMouseLeave = () => {
        header2.style.color = ''; // Revert the color to its original color
    };

    // Add event listeners to the button and the h1 element
    getJokeBtn.addEventListener('click', handleClick);
    header2.addEventListener('mouseover', handleHover); // Event for hovering over the h2 element
    header2.addEventListener('mouseleave', handleMouseLeave); // Event for leaving the h2 element with the mouse
});


document.addEventListener('DOMContentLoaded', ()=>{
//code of the fucntion
})