$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["UI/UX Design", "Data Science", "Web Development"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});

const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn');
})

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
       if(item.classList.contains(btn.id)){
        resetActiveBtn();
        btn.classList.add('active-btn');
        item.style.display = "block";
       } else {
        item.style.display = "none";
       }
    });
}

function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    })
}