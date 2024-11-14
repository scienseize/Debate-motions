function searchMotions() {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const resultsContainer = document.getElementById("results");

  // Clear previous results
  resultsContainer.innerHTML = "";

  // Filter motions based on the search query
  const results = motions.filter(motion => motion.keyword.includes(query));

  // Limit to 4 results only
  const limitedResults = results.slice(0, 3);

  // Display limited results with "Government" and "Opposition" buttons
  limitedResults.forEach((motion, index) => {
    const listItem = document.createElement("li");
    listItem.style.animation = `fadeIn 0.5s ease ${index * 0.1}s both`;
    
    // Title of the motion
    const title = document.createElement("span");
    title.textContent = motion.title;

    // Government button
    const govButton = document.createElement("button");
    govButton.textContent = "Government";
    govButton.onclick = () => window.location.href = `${motion.link}?side=government`;

    // Opposition button
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

