const generate_meme_btn=document.querySelector('.meme-generator-button');
const meme_title=document.querySelector('.meme-title');
const meme_image=document.querySelector('.meme-image');
const meme_author=document.querySelector('.meme-author');

const generate_meme=()=>{
    console.log("hello");
    fetch(' https://meme-api.com/gimme')
    .then((response)=>  response.json())
    .then((data)=>{updatememe(data.url, data.title, data.author)})
    
};

const updatememe=(url, title, author)=>{
    meme_image.setAttribute('src',url );
    meme_title.innerHTML=title;
    meme_author.innerHTML=author;
   
};


generate_meme_btn.addEventListener('click', generate_meme);
