function getJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").textContent = data.joke;
    })
    .catch(error => {
      document.getElementById("joke").textContent = "Oops! Couldn't fetch a joke.";
      console.error("Error fetching joke:", error);
    });
}
