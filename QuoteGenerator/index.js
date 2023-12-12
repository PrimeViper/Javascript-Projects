const quote = document.getElementById("quotedescp");
const author = document.getElementById("quoteauth");
const api_url ="https://api.quotable.io/random";

async function generatequote(url){
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data); 
    quote.innerHTML = data.content;
    author.innerHTML = "-" + data.author
}
generatequote(api_url);