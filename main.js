document.addEventListener('DOMContentLoaded', () => {
    // Data structure with 10 water bodies, 3 years, and 4 parameters
    const waterBodyData = {
        "Yamuna River": {
            "2022": { "pH": [7.0, 7.1, 7.2,6.8, 6.9, 7.2], "Dissolved Oxygen": [5.5, 5.6, 5.7,6.0, 6.1, 5.9], "Turbidity": [18, 20, 22,25, 22, 19], "Nitrate Levels": [3.0, 3.2, 3.4,3.8, 3.6, 3.5] },
            "2023": { "pH": [7.2, 7.3, 7.1], "Dissolved Oxygen": [5.8, 5.7, 5.9], "Turbidity": [16, 18, 20], "Nitrate Levels": [3.4, 3.6, 3.5] },
            "2024": { "pH": [7.1, 7.0, 7.2], "Dissolved Oxygen": [6.0, 6.1, 6.2], "Turbidity": [17, 19, 21], "Nitrate Levels": [3.7, 3.8, 3.9] }
        },
        "Bhalswa Lake": {
            "2022": { "pH": [6.8, 6.9, 7.0,7.0, 6.8, 6.6], "Dissolved Oxygen": [4.5, 4.7, 4.6,4.6, 4.5, 4.3], "Turbidity": [30, 32, 34, 28, 31, 29], "Nitrate Levels": [2.7, 2.8, 2.9, 2.8, 2.9, 2.7] },
            "2023": { "pH": [6.9, 7.0, 7.1, 7.2, 7.1, 6.9], "Dissolved Oxygen": [4.6, 4.8, 4.7,4.5, 4.6, 4.5], "Turbidity": [28, 29, 31,34, 31, 30], "Nitrate Levels": [2.9, 3.0, 3.1,2.7, 2.6, 2.8] },
            "2024": { "pH": [7.0, 7.1, 7.2,6.9, 7.0, 6.8], "Dissolved Oxygen": [4.8, 4.9, 4.7,4.6, 4.5, 4.4], "Turbidity": [27, 26, 29,31, 30, 28], "Nitrate Levels": [2.8, 2.7, 2.6, 2.8, 2.7, 2.5] }
        },
        "Sanjay Lake": {
            "2022": { "pH": [6.5, 6.6, 6.7], "Dissolved Oxygen": [5.2, 5.4, 5.3], "Turbidity": [24, 22, 25], "Nitrate Levels": [3.1, 3.0, 3.2] },
            "2023": { "pH": [6.7, 6.9, 6.8], "Dissolved Oxygen": [5.5, 5.4, 5.6], "Turbidity": [23, 25, 27], "Nitrate Levels": [3.3, 3.5, 3.4] },
            "2024": { "pH": [6.8, 7.0, 6.9], "Dissolved Oxygen": [5.4, 5.6, 5.7], "Turbidity": [26, 28, 29], "Nitrate Levels": [3.5, 3.6, 3.7] }
        },
        "Najafgarh Lake": {
            "2022": { "pH": [7.3, 7.4, 7.1], "Dissolved Oxygen": [4.5, 4.6, 4.7], "Turbidity": [30, 31, 33], "Nitrate Levels": [3.0, 3.1, 3.2] },
            "2023": { "pH": [7.2, 7.1, 7.0], "Dissolved Oxygen": [4.8, 4.7, 4.6], "Turbidity": [32, 33, 35], "Nitrate Levels": [3.2, 3.4, 3.5] },
            "2024": { "pH": [7.1, 7.3, 7.4], "Dissolved Oxygen": [5.0, 5.1, 5.2], "Turbidity": [29, 31, 32], "Nitrate Levels": [3.3, 3.5, 3.6] }
        },
        "Hauz Khas Lake": {
            "2022": { "pH": [6.7, 6.8, 6.9], "Dissolved Oxygen": [5.4, 5.3, 5.5], "Turbidity": [20, 21, 22], "Nitrate Levels": [2.9, 3.0, 3.2] },
            "2023": { "pH": [6.8, 7.0, 7.1], "Dissolved Oxygen": [5.6, 5.7, 5.8], "Turbidity": [23, 24, 25], "Nitrate Levels": [3.1, 3.3, 3.4] },
            "2024": { "pH": [7.0, 7.1, 7.2], "Dissolved Oxygen": [5.7, 5.8, 5.9], "Turbidity": [26, 27, 28], "Nitrate Levels": [3.5, 3.6, 3.7] }
        },
        "Tughlaqabad Lake": {
            "2022": { "pH": [7.0, 6.9, 7.1], "Dissolved Oxygen": [4.8, 4.7, 4.9], "Turbidity": [19, 18, 21], "Nitrate Levels": [2.5, 2.6, 2.7] },
            "2023": { "pH": [6.9, 7.0, 7.1], "Dissolved Oxygen": [4.9, 4.8, 5.0], "Turbidity": [20, 22, 23], "Nitrate Levels": [2.7, 2.8, 2.9] },
            "2024": { "pH": [7.2, 7.3, 7.1], "Dissolved Oxygen": [5.0, 5.2, 5.1], "Turbidity": [22, 23, 25], "Nitrate Levels": [2.8, 2.7, 3.0] }
        },
        "Sukhdev Vihar Pond": {
            "2022": { "pH": [6.6, 6.7, 6.5], "Dissolved Oxygen": [5.1, 5.0, 5.2], "Turbidity": [24, 22, 23], "Nitrate Levels": [2.8, 2.9, 2.7] },
            "2023": { "pH": [6.8, 6.9, 7.0], "Dissolved Oxygen": [5.3, 5.5, 5.4], "Turbidity": [25, 27, 26], "Nitrate Levels": [3.0, 3.1, 3.3] },
            "2024": { "pH": [7.1, 7.2, 7.0], "Dissolved Oxygen": [5.6, 5.7, 5.5], "Turbidity": [28, 29, 27], "Nitrate Levels": [3.2, 3.3, 3.1] }
        },
        "Okhla Bird Sanctuary Lake": {
            "2022": { "pH": [6.7, 6.8, 6.6], "Dissolved Oxygen": [4.9, 4.8, 5.0], "Turbidity": [29, 28, 30], "Nitrate Levels": [3.1, 3.0, 3.2] },
            "2023": { "pH": [6.9, 7.0, 6.8], "Dissolved Oxygen": [5.0, 5.2, 5.3], "Turbidity": [31, 30, 29], "Nitrate Levels": [3.2, 3.3, 3.4] },
            "2024": { "pH": [7.2, 7.1, 7.0], "Dissolved Oxygen": [5.4, 5.3, 5.2], "Turbidity": [32, 31, 30], "Nitrate Levels": [3.4, 3.5, 3.6] }
        },
        "Roshanara Bagh Lake": {
            "2022": { "pH": [7.3, 7.4, 7.2], "Dissolved Oxygen": [4.5, 4.6, 4.7], "Turbidity": [27, 28, 29], "Nitrate Levels": [2.9, 3.0, 3.1] },
            "2023": { "pH": [7.5, 7.6, 7.3], "Dissolved Oxygen": [4.8, 4.9, 4.7], "Turbidity": [28, 30, 31], "Nitrate Levels": [3.0, 3.2, 3.4] },
            "2024": { "pH": [7.2, 7.1, 7.3], "Dissolved Oxygen": [4.7, 4.6, 4.8], "Turbidity": [29, 31, 33], "Nitrate Levels": [3.3, 3.5, 3.4] }
        },
        "Humayun’s Tomb Lake": {
            "2022": { "pH": [6.8, 6.9, 7.0], "Dissolved Oxygen": [5.2, 5.3, 5.4], "Turbidity": [24, 25, 23], "Nitrate Levels": [3.0, 3.1, 3.2] },
            "2023": { "pH": [6.9, 7.0, 7.1], "Dissolved Oxygen": [5.4, 5.5, 5.6], "Turbidity": [26, 27, 28], "Nitrate Levels": [3.2, 3.3, 3.4] },
            "2024": { "pH": [7.1, 7.2, 7.0], "Dissolved Oxygen": [5.6, 5.5, 5.7], "Turbidity": [29, 30, 31], "Nitrate Levels": [3.5, 3.6, 3.4] }
        }
    };

    // Initialize chart variable
    let waterBodyHealthChart;

    // Function to update water body health chart
    function updateWaterBodyHealthChart(waterBody, year, parameter) {
        const ctx = document.getElementById('waterBodyHealthChart').getContext('2d');
        const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
        const data = waterBodyData[waterBody][year][parameter];

        // Destroy existing chart if it exists
        if (waterBodyHealthChart) {
            waterBodyHealthChart.destroy();
        }

        // Create a new chart instance with the selected data
        waterBodyHealthChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: `${parameter} Levels in ${waterBody} (${year})`,
                    data: data,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: { display: true, title: { display: true, text: 'Month' } },
                    y: { display: true, title: { display: true, text: parameter } }
                }
            }
        });
    }

    // Event listeners for dropdowns
    const waterBodySelect = document.getElementById('waterBodySelect');
    const parameterSelect = document.getElementById('parameterSelect');
    const yearSelect = document.getElementById('yearSelect');

    waterBodySelect.addEventListener('change', () => {
        const selectedWaterBody = waterBodySelect.value;
        const selectedParameter = parameterSelect.value;
        const selectedYear = yearSelect.value;

        if (selectedWaterBody !== 'Select Water Body' && selectedParameter !== 'Select Parameter' && selectedYear !== 'Select Year') {
            updateWaterBodyHealthChart(selectedWaterBody, selectedYear, selectedParameter);
        }
    });

    parameterSelect.addEventListener('change', () => {
        const selectedWaterBody = waterBodySelect.value;
        const selectedParameter = parameterSelect.value;
        const selectedYear = yearSelect.value;

        if (selectedWaterBody !== 'Select Water Body' && selectedParameter !== 'Select Parameter' && selectedYear !== 'Select Year') {
            updateWaterBodyHealthChart(selectedWaterBody, selectedYear, selectedParameter);
        }
    });

    yearSelect.addEventListener('change', () => {
        const selectedWaterBody = waterBodySelect.value;
        const selectedParameter = parameterSelect.value;
        const selectedYear = yearSelect.value;

        if (selectedWaterBody !== 'Select Water Body' && selectedParameter !== 'Select Parameter' && selectedYear !== 'Select Year') {
            updateWaterBodyHealthChart(selectedWaterBody, selectedYear, selectedParameter);
        }
    });
});