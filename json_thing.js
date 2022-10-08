fetch("./assets/data/maps.json")
    .then(response => {
        return response.json();
    })
    .then(data => console.log(data));