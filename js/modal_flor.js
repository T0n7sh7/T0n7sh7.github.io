let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".boton")[0];
let abrir2 = document.querySelectorAll(".boton")[1];
let abrir3 = document.querySelectorAll(".boton")[2];
let abrir4 = document.querySelectorAll(".boton")[3];
let abrir5 = document.querySelectorAll(".boton")[4];
let abrir6 = document.querySelectorAll(".boton")[5];
let modal = document.querySelectorAll(".modal")[0];
let modalc = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e) {
    e.preventDefault();
    modalc.style.visibility = "visible";
    modal.classList.toggle("modal-close");
    modal.classList.toggle("actives");
});
abrir2.addEventListener("click", function(e) {
    e.preventDefault();
    modalc.style.visibility = "visible";
    modal.classList.toggle("modal-close");
    modal.classList.toggle("actives");
});
abrir3.addEventListener("click", function(e) {
    e.preventDefault();
    modalc.style.visibility = "visible";
    modal.classList.toggle("modal-close");
    modal.classList.toggle("actives");
});
abrir4.addEventListener("click", function(e) {
    e.preventDefault();
    modalc.style.visibility = "visible";
    modal.classList.toggle("modal-close");
    modal.classList.toggle("actives");
});
abrir5.addEventListener("click", function(e) {
    e.preventDefault();
    modalc.style.visibility = "visible";
    modal.classList.toggle("modal-close");
    modal.classList.toggle("actives");
});
abrir6.addEventListener("click", function(e) {
    e.preventDefault();
    modalc.style.visibility = "visible";
    modal.classList.toggle("modal-close");
    modal.classList.toggle("actives");
});

cerrar.addEventListener("click", function() {
    modal.classList.toggle("modal-close");
    setTimeout(function() {
        modalc.style.visibility = "hidden";
        modal.classList.toggle("actives");
    }, 900)

});