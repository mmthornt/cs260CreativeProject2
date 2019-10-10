document.getElementById("getFortune").addEventListener("click", async function(event) {
  event.preventDefault();
  var url = "https://cors-anywhere.herokuapp.com";
  url += "/quote-garden.herokuapp.com/quotes/random"; //gives quotes, should work for our purposes
  //steakovercooked.com/api/fortune"; can use if desperate, mostly dumb jokes with some fortunes sprinkled in

  console.log(url);
  //const response = await fetch(url);
  //let JSON=await response.json();
  //alert("here");
  //console.log("response",response.JSON);
  fetch(url, { mode: 'cors' })
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      document.getElementById("fortune").innerHTML = json.quoteText;
    });
})
