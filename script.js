document.getElementById("getFortune").addEventListener("click", async function(event) {
  event.preventDefault();
var url = "https://cors-anywhere.herokuapp.com";
  url +="/quote-garden.herokuapp.com/quotes/random";
  //steakovercooked.com/api/fortune";

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
