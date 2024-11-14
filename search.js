function searchMotions() {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const resultsContainer = document.getElementById("results");

  // Clear previous results
  resultsContainer.innerHTML = "";

  // Filter motions based on the search query
  const results = motions.filter(motion => motion.keyword.includes(query));

  // Display results
  results.forEach(motion => {
    const listItem = document.createElement("li");
    const title = document.createElement("span");
    title.textContent = motion.title;
    
    // Create buttons for Government and Opposition
    const govButton = document.createElement("button");
    govButton.textContent = "Government";
    govButton.onclick = () => window.location.href = `${motion.link}?side=government`;

    const oppButton = document.createElement("button");
    oppButton.textContent = "Opposition";
    oppButton.onclick = () => window.location.href = `${motion.link}?side=opposition`;

    // Append elements to the list item
    listItem.appendChild(title);
    listItem.appendChild(govButton);
    listItem.appendChild(oppButton);
    resultsContainer.appendChild(listItem);
  });
}
