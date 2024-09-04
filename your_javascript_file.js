const apiKey = 'WARP_OTP_01HTYC4APZGXQTRV2MCSE032QC';
const deploymentId = 'AKfycbxBvxyO3C0jmHNyHzhsGb7g9IAn0zIbgWRAqNLo9kAN';

const apiEndpoint = `https://script.google.com/macros/s/${deploymentId}/exec?api_key=${apiKey}`;

fetch(apiEndpoint)
  .then(response => response.json())
  .then(data => {
    tableau.connectionData = JSON.stringify(data); // Store data for Tableau
    tableau.submit(); // Notify Tableau that data is ready
  })
  .catch(error => console.error('Error fetching data:', error));
