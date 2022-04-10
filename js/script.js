let links = window.document.querySelectorAll(".internal-link");
(Array.from(links)).map(link=>link.addEventListener('click', scroll))
function scroll (e){
    e.preventDefault();
    const header = window.document.querySelector('#header')
    const headerHeight = header.getBoundingClientRect().height;
    const id = this.getAttribute("href");
    const section = window.document.querySelector(id);
    const position = section.getBoundingClientRect().top;
    window.scrollBy({top: position - headerHeight, left: 0, behavior: "smooth"});
}