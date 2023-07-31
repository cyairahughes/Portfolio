const modals = document.querySelectorAll('.modal');
const projects = document.querySelectorAll('.project');
const exit_modals = document.querySelectorAll('.exit-modal-button');
const modal_lefts = document.querySelectorAll('.modal-left');
const modal_rights = document.querySelectorAll('.modal-right');
let slideIndex = 1;
for (let i = 0; i < modals.length; i++){
  showDivs(slideIndex, i);
  projects[i].onclick = function(){openModal(i)};
  exit_modals[i].onclick = function(){closeModal(i)};
  modal_lefts[i].onclick = function(){plusDivs(-1, i)};
  modal_rights[i].onclick = function(){plusDivs(1, i)};
}

function openModal(i) {
    modals[i].style.display = 'flex';
}

  function closeModal(i) {
    modals[i].style.display = 'none';
}

function plusDivs(n, id) {
    showDivs(slideIndex += n, id);
}
  
  function showDivs(n, id) {
    var i;
    var x = modals[id].querySelectorAll('.modal-img');
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }