// Define the asynchronous function to fetch and display user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the element where data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Convert the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the user list
        const userList = document.createElement('ul');

        // Loop through each user and create a list item
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors gracefully
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run the function after the DOM content has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
