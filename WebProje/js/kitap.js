function searchBooks() {
    var searchTerm = document.getElementById("searchInput").value;
    var apiUrl = "https://openlibrary.org/search.json?q=" + encodeURIComponent(searchTerm);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayResults(data) {
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (data.docs.length === 0) {
        resultsDiv.innerHTML = "Sonuç bulunamadı.";
        return;
    }

    var books = data.docs.slice(0, 3); // İlk 10 kitabı al

    books.forEach(book => {
        var title = book.title;
        var author = book.author_name ? book.author_name.join(", ") : "Bilinmiyor";
        var coverUrl = "https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg";

        var bookDiv = document.createElement("div");
        bookDiv.innerHTML = `
            <img src="${coverUrl}" alt="${title}">
            <h3>${title}</h3>
            <p>Yazar: ${author}</p>
        `;
        resultsDiv.appendChild(bookDiv);
    });
}
