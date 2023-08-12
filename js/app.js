const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.control');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active-btn');
                document.querySelector('.header .navbar li a[href*=' + id + ']').classList.add('active-btn');
            });
        };
    });
};



const icon = document.getElementById("icon")
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = ""
    }
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 1000,
});
sr.reveal('.left > span',{delay:400, origin: 'top'});
sr.reveal('.left > h1',{delay:200, origin: 'left'});
sr.reveal('.left > p',{delay:250, origin: 'right'});
sr.reveal('.left > .social-media',{delay:350, origin: 'top'});
sr.reveal('.left > a',{delay:350, origin: 'bottom'});
sr.reveal('.right',{delay:400, origin: 'bottom'});
sr.reveal('h4',{delay:350, origin: 'top'});
sr.reveal('.heading',{delay:50, origin: 'right'});















































// const sections = document.querySelectorAll('section');
// const sectBtns = document.querySelectorAll('.controls');
// const sectBtn = document.querySelectorAll('.control');
// const allSections = document.querySelector('.main-content');

// function PageTransitions(){
//   for(let i = 0; i < sectBtn.length; i++){
//     sectBtn[i].addEventListener('click', function(){
//         let currentBtn = document.querySelectorAll('.active-btn');
//         currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//         this.className += ' active-btn';
//     })
//   }
//   allSections.addEventListener('click', (e) => {
//     const id = e.target.dataset.id;
//     if(id){
//       sectBtns.forEach((btn) => {
//         btn.classList.remove('active-btn')
//       })
//       e.target.classList.add('active-btn');

//       sections.forEach((section) => {
//         section.classList.remove('active')
//       })

//       const element = document.getElementById(id);
//       element.classList.add('active-btn');
//     }
//   })
// }
// PageTransitions();