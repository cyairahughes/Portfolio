function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

let performed = false;
const box = document.querySelector('.bar');

document.addEventListener('scroll', function () {
    if(isInViewport(box) && !performed)
    {
        skill_animation();
        performed = true;
    }
}, {
    passive: true
});

function skill_animation(){
    let elems = document.getElementsByClassName("bar-fill");
    let x = 5;
    for (let i = 0; i < elems.length; i++){
        let elem = elems[i]; 
        let width = 0;
        let id = setInterval(frame, x++);
        let PERCENTAGE = parseInt(elem.textContent.replace("%", ""));
        function frame() {
            if (width >= PERCENTAGE) {
            clearInterval(id);
            } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = `<p>` + width + "%" + `</p>`;
            }
        }
    }
}