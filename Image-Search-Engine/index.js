let searchform = document.getElementById("searchform");
let searchbox = document.getElementById("searchbox");
let searchresult = document.getElementById("searchresult");
let showmore = document.getElementById("showmore");
const accessKey = "9GvsSTcW2mP70g9hJaHg8seiL3_ZMePV0ztjtApbtjc"


let key = "";
let page = 1;

async function searchImages(){
    
    
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12` 
    const response = await fetch(url);
    const data = await  response.json()

    const results = data.results;
    // console.log(data);
    if(page === 1){
        searchresult.innerHTML = ""
        
    }
    if(results.length == 0){
        searchresult.innerHTML = "<p>Warning...You should put some value.</p>";
        showmore.style.display = "none";
        return;
    }
    
    results.map((result) =>{
        const image =  document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchresult.appendChild(imageLink);
    })
    showmore.style.display = "block"
    
}

searchform.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    keyword = searchbox.value;
    searchImages();
})

showmore.addEventListener("click",()=>{
    page++;
    searchbox.value = "";

    searchImages();
})
