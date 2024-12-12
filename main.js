// Function to fetch and display meals
function searchMeals() {
    const searchQuery = document.getElementById('searchInput').value;

    // Exit if the search input is empty
    if (!searchQuery) {
        alert("Please enter a search term!");
        return;
    }

    // Clear previous results
    document.getElementById('resultsSection').innerHTML = '';

    // TheMealDB API base URL
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchQuery)}`;

    // Fetch meals from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Check if meals were found
            if (data.meals) {
                displayMeals(data.meals);
            } else {
                document.getElementById('resultsSection').innerHTML = `<p>No meals found for "${searchQuery}".</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


// Function to display the fetched meals
function displayMeals(meals) {
    const resultsSection = document.getElementById('resultsSection');
    
    meals.forEach(meal => {
        const mealCard = document.createElement('div');
        mealCard.classList.add('recipe-card');

        // Create HTML structure for each meal card
        mealCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <p><strong>Category:</strong> ${meal.strCategory}</p>
            <p><strong>Instructions:</strong> <a href="${meal.strSource}" target="_blank">View Recipe</a></p>
        `;

        // Append the card to the results section
        resultsSection.appendChild(mealCard);
    });
    document.getElementById('newsletterForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from reloading the page on submit
    
        // Get the email value from the input
        const email = document.getElementById('email').value;
        const messageContainer = document.getElementById('subscriptionMessage');
    
        // Validate the email format
        if (validateEmail(email)) {
            // Simulate an API call or email subscription logic here
            // For now, we'll just show a success message
            messageContainer.textContent = 'Thank you for subscribing!';
            messageContainer.style.color = 'green';
            messageContainer.style.display = 'block';
    
            // You can add actual logic to send the email to the server or an email service (e.g., Mailchimp)
            // Example: callSubscribeAPI(email);
    
            // Clear the input field after subscription
            document.getElementById('email').value = '';
        } else {
            messageContainer.textContent = 'Please enter a valid email address.';
            messageContainer.style.color = 'red';
            messageContainer.style.display = 'block';
        }
    });
    
  
    






}
