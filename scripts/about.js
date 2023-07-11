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