document.addEventListener('DOMContentLoaded', () => {
    // Variables to hold data for demonstration
    const waterBodyData = {
        "Yamuna River": {
            "pH": [7.1, 7.2, 7.0, 6.8, 6.9, 7.2],
            "Dissolved Oxygen": [5.6, 5.8, 5.5, 6.0, 6.1, 5.9],
            "Turbidity": [15, 18, 20, 25, 22, 19],
            "Nitrate Levels": [3.5, 3.7, 3.4, 3.8, 3.6, 3.5]
        },
        "Bhalswa Lake": {
            "pH": [6.8, 6.7, 6.9, 7.0, 6.8, 6.6],
            "Dissolved Oxygen": [4.5, 4.8, 4.7, 4.6, 4.5, 4.3],
            "Turbidity": [30, 28, 32, 34, 31, 29],
            "Nitrate Levels": [2.8, 2.9, 2.7, 2.8, 2.9, 2.7]
        }
    };

    // Function to update water body charts based on user selection
    function updateWaterBodyHealthChart(waterBody, parameter) {
        const ctx = document.getElementById('waterBodyHealthChart').getContext('2d');
        const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
        const data = waterBodyData[waterBody][parameter];

        const waterBodyHealthChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: parameter + ' Levels Over Time',
                    data: data,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: false
                }]
            },
            options: {
                scales: {
                    x: { display: true, title: { display: true, text: 'Month' } },
                    y: { display: true, title: { display: true, text: parameter } }
                }
            }
        });
    }

    // Filter selections for Water Body Health page
    if (document.getElementById('waterBodySelect')) {
        document.getElementById('waterBodySelect').addEventListener('change', (event) => {
            const selectedWaterBody = event.target.value;
            const selectedParameter = document.getElementById('parameterSelect').value;

            if (selectedWaterBody !== 'Select Water Body' && selectedParameter !== 'Select Parameter') {
                updateWaterBodyHealthChart(selectedWaterBody, selectedParameter);
            }
        });

        document.getElementById('parameterSelect').addEventListener('change', (event) => {
            const selectedParameter = event.target.value;
            const selectedWaterBody = document.getElementById('waterBodySelect').value;

            if (selectedWaterBody !== 'Select Water Body' && selectedParameter !== 'Select Parameter') {
                updateWaterBodyHealthChart(selectedWaterBody, selectedParameter);
            }
        });
    }

    // Form submission handling for the 'Report an Issue' form
    if (document.getElementById('issueDescription')) {
        document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();

            const issueDescription = document.getElementById('issueDescription').value;
            const issueLocation = document.getElementById('issueLocation').value;

            // Save the issue report (this can be integrated with backend)
            console.log(`Issue Reported: ${issueDescription}, Location: ${issueLocation}`);

            // Show confirmation message
            alert('Thank you for reporting the issue. Our team will look into it.');
        });
    }

    // Form submission handling for the 'Volunteer for Clean-up' form
    if (document.getElementById('volunteerName')) {
        document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();

            const volunteerName = document.getElementById('volunteerName').value;
            const volunteerEmail = document.getElementById('volunteerEmail').value;
            const availability = document.getElementById('availability').value;

            // Save the volunteer information (this can be integrated with backend)
            console.log(`New Volunteer: ${volunteerName}, Email: ${volunteerEmail}, Availability: ${availability}`);

            // Show confirmation message
            alert('Thank you for volunteering! We will reach out to you soon.');
        });
    }
});
