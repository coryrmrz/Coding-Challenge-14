// Task 2: Fetch Tickets Using Async/Await and Handle Errors
const ticketsList = document.getElementById('ticketsList'); // Selects element for displaying tickets
const errorMessage = document.getElementById('errorMessage'); // Selects element error message

async function fetchTickets() { // Async function to fetch all tickets
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // API URL for fetching tickets
    try {
        const response = await fetch(apiUrl); // Fetching all tickets
        if (!response.ok) { // Checks if response isn't okay
            throw new Error('Failed to fetch ticket data'); // Throws error message if fetch fails
        }
        const tickets = await response.json(); // Response as JSON
        displayTickets(tickets); // Displays tickets
    } catch (error) {
// Task 4: Handle Errors
        errorMessage.textContent = 'There was a problem loading the tickets. Please try again later.'; // Displays error message
        console.error('Error:', error.message); // Logs error message to console
    } finally {
        console.log('Fetch attempt completed'); // Losg when fetch attempt is complete
    }
}
