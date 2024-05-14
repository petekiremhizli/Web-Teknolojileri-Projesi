function searchFashion() {
    var searchTerm = document.getElementById("searchInput").value;
    var apiUrl = "https://api.example.com/fashion?q=" + encodeURIComponent(searchTerm);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Hata:', error);
        });
}

function displayResults(data) {
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (data.length === 0) {
        resultsDiv.innerHTML = "Sonuç bulunamadı.";
        return;
    }

    data.forEach(item => {
        var title = item.title;
        var imageUrl = item.image_url;
        var description = item.description;

        var resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
        resultDiv.innerHTML = `
            <h2>${title}</h2>
            <img src="${imageUrl}" alt="${title}">
            <p>${description}</p>
        `;
        resultsDiv.appendChild(resultDiv);
    });
}
