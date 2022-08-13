let movies=[
    {
        name:"Yeh Rishta Kya Kehlata Hain",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, voluptate deleniti debitis, quasi nam rem alias libero in iusto vel",
        image:"images/yrkkh.png"
    },
    {
        name:"Anupama",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, voluptate deleniti debitis, quasi nam rem alias libero in iusto vel",
        image:"images/anupama.png"
    },
    {
        name:"Koffee With Karan Season 7",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, voluptate deleniti debitis, quasi nam rem alias libero in iusto vel",
        image:"images/kfk.jpg"
    },
    {
        name:"Oxygen",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, voluptate deleniti debitis, quasi nam rem alias libero in iusto vel",
        image:"images/oxygen.jpg"
    },
    {
        name:"Luca",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, voluptate deleniti debitis, quasi nam rem alias libero in iusto vel",
        image:"images/slider 5.png"
    }
];
const caraousel=document.querySelector('.caraousel');
let slider=[];

let slideIndex=0;
const createSlide = () =>{
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    let slide=document.createElement('div');
    var imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    caraousel.appendChild(slide);

    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    slider.push(slide);

    if(slider.length)
    {
        slider[0].style.marginLeft= `calc(-${100 * (slider.length-2)}% - ${30 * (slider.length-2)}px)`;
    }
}

for(let i=0;i<3;i++)
{
    createSlide();
}
setInterval(()=>{
    createSlide();
},3000);

const videoCards=[...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener("mouseover", () =>{
        let video = item.children[1];
        video.play();
    })
    item.addEventListener("mouseleave", () =>{
        let video = item.children[1];
        video.pause();
    })
})

//card slider
let cardContainer=[...document.querySelectorAll('.card-container')];
let preBtns=[...document.querySelectorAll('.pre-btn')];
let nxtBtns=[...document.querySelectorAll('.nxt-btn')];
cardContainer.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth + 200;
    })   
})
