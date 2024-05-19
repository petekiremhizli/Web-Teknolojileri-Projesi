// API dan veri çekme ve sayfaya ekleme fonksiyon ve işlemleri
function getBreeds() {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(response => response.json())
        .then(data => {
            var select = document.getElementById("breeds");
            data.forEach(breed => {
                var option = document.createElement("option");
                option.text = breed.name;
                option.value = breed.id;
                select.add(option);
            });
        })
        .catch(error => {
            console.error('Hata:', error);
        });
}

function getBreedInfo() {
    var breedId = document.getElementById("breeds").value;
    if (!breedId) {
        document.getElementById("breedInfo").innerHTML = "";
        return;
    }

    fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${breedId}`)
        .then(response => response.json())
        .then(data => {
            var breedInfoDiv = document.getElementById("breedInfo");
            var imageUrl = data[0].url;
            breedInfoDiv.innerHTML = `<img src="${imageUrl}" alt="Köpek Resmi">`;
        })
        .catch(error => {
            console.error('Hata:', error);
        });
}

// Sayfa yüklendiğinde köpek ırklarını alma
window.onload = getBreeds;