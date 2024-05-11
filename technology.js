//dom tree
const main = document.getElementById('articles-3');


let data;
let dataLength=0;

async function getData(){
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9ab65c556bb34d27b1ca95fc1eaa9e1b");
    const result=await res.json();
    data=result.articles;
    dataLength=data.length;

    console.log(data);
    
  renderUI();
    
}
getData();

function renderUI(){
for (let i = 0; i <dataLength; i++) {
    const article = document.createElement('article');
    article.innerHTML = `<img class="article-image" src="${data[i].urlToImage}" alt=""News Image 1" />
<div class="article-content">
    <h2>${data[i].title}</h2>
    <p>
    ${data[i].description}
    </p>
    
    <a href="${data[i].url}" target="_blank">Read more....</a> 
</div>

`;
    main.appendChild(article);
}
}