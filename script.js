async function getData(url) {
    try {
        const response = await fetch(url); // Wait for the network request

        if (!response.ok) { // Check for HTTP errors
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Wait for the body to be parsed as JSON

        // Display the data in the output div
        const outputDiv = document.querySelector('.main-grid');
        ardata = data.meals;
        ardata.forEach(element => {
            str_img = `<img height='200px' src="${element.strMealThumb}" alt="${element.strMeal}">`;
            strt_title = `<h2>${element.strMeal}</h2>`;
            outputDiv.innerHTML += `${strt_title}${str_img}`;
        });
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Usage:
getData('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
