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

// Task 3: Display Tickets Dynamically on the Page
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // API URL for fetching tickets
fetch(apiUrl) // Fetches all tickets
    .then(response => response.json()) // Response as JSON
    .then(products => {
        products.forEach(ticket => { // Loops through each ticket
            const listItem = document.createElement('li'); // Creates new list item for each ticket
            listItem.textContent = `Ticket ID: ${ticket.id} - Customer ID: ${ticket.userId} - Issue: ${ticket.title} - Details: ${ticket.body}`; 
            ticketsList.appendChild(listItem); // Appends list item to ticket list
        });
    })
    .catch(error => { // Handles any fetch errors
        console.error('Failed to load tickets. Please try again later.', error); // Logs error message
    })
    .finally(() => {
        console.log('Clean up'); // Logs cleanup message
    });
fetchTickets(); // Fetch and display all tickets on page load