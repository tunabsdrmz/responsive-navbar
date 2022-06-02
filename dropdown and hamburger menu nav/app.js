const burger = document.querySelector('.burger');
const nav = document.querySelector('.main-ul');
const navLinks = document.querySelectorAll('.main-ul li');
const dropdown = document.getElementById('dropdown');
const icon = document.querySelector('.iconify');
dropdown.addEventListener('click', ()=>{
    document.getElementById('mydropdown').classList.toggle('show');
    icon.classList.toggle('changedisplay');
});
burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
    navLinks.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation = "";
        }
        else{
        link.style.animation = `fadeElements 0.5s ease forwards ${index / 7 + 0.4}s`;
    }
    });
    burger.classList.toggle('toggle');
});

