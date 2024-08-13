const arrows = document.querySelectorAll(".arrow");
const songLists = document.querySelectorAll(".song-list");

arrows.forEach((arrow,i)=>{
    const itemNum = songLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if (itemNum - (4 + clickCounter) + (5.5 - ratio) >= 0) {
        songLists[i].style.transform = `translateX(${
            songLists[i].computedStyleMap().get("transform")[0].x.value
        -300}px)`
        }
        else {
            songLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".songlistwrap,.feature-content,.logo,.container,.song-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.songlistimg,.songlistitem,.songlistdesc");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})