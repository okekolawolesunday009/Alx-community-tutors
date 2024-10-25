function fetchApiData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayApiData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Function to display fetched data
  function displayApiData(data) {
    const apiDataDiv = document.getElementById('apiData');
    
    // Display first 5 posts from the API
    const posts = data.slice(0, 5);
    
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
      apiDataDiv.appendChild(postElement);
    });
  }
  
  