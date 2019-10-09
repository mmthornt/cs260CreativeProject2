const url = "https://helloacm.com/api/"
fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);

    })
//idk im bad at api