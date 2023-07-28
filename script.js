// Fetch data from data.json asynchronously
fetch('/data.json')
    .then(response => response.json())
    .then(data => {
        // Get the container element where the dynamic content will be added
        const dataContainer = document.getElementById('dataContainer');

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Define a mapping between scores and colors
        // Applying css to different items
        const colorCategory = {
            "Reaction": {
                textColor: "var(--color-light-red)",
                backgroundColor: "hsla(0, 100%, 67%, 0.050)"
            },
            "Memory": {
                textColor: "var(--color-orangey-yellow)",
                backgroundColor: "hsl(39, 100%, 56%, 0.050)"
            },
            "Verbal": {
                textColor: "var(--color-green-teal)",
                backgroundColor: "hsl(166, 100%, 37%, 0.050)"
            },
            "Visual": {
                textColor: "var(--color-cobalt-blue)",
                backgroundColor: "hsl(234, 85%, 45%, 0.050)"
            },
        }

        // Loop through the data and create HTML elements dynamically
        data.forEach(item => {
            const divElement = document.createElement('div');
            divElement.innerHTML = `
          <img src="${item.icon}" alt="${item.category}">
          <span style="color: ${colorCategory[item.category].textColor}">${item.category}</span>
          <span>${item.score} <span class="totalScore"> / 100</span> </span>
        `;

            // Apply css to the .data div 
            divElement.style.background = colorCategory[item.category].backgroundColor;
            // divElement.style.display = 'flex';
            // divElement.style.flexDirection = 'column';
            // divElement.style.alignItems = 'center';
            // divElement.style.marginTop = '1.5rem';
            // divElement.style.padding = '1.3rem 2rem';

            // Add more item if theres added data in data.json
            dataContainer.appendChild(divElement);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        // In case of an error, update the container with an error message
        const dataContainer = document.getElementById('dataContainer');
        dataContainer.innerHTML = 'Error loading data.';
    });