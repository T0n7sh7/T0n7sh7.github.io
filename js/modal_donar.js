let cerrar = document.querySelectorAll(".close")[0];
let cerrar1 = document.querySelectorAll(".close")[1];
let cerrar2 = document.querySelectorAll(".close")[2];
let abrir = document.querySelectorAll(".boton")[0];
let abrir2 = document.querySelectorAll(".boton")[1];
let abrir3 = document.querySelectorAll(".boton")[2];
let modal = document.querySelectorAll(".modal")[0];
let modal1 = document.querySelectorAll(".modal1")[0];
let modal2 = document.querySelectorAll(".modal2")[0];
let modalc = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e) {
    e.preventDefault();
    modalc.style.visibility = "visible";
    modal1.classList.toggle("modal-close");
    modal1.classList.toggle("actives");
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
    modal2.classList.toggle("modal-close");
    modal2.classList.toggle("actives");
});

cerrar.addEventListener("click", function() {
    modal.classList.toggle("modal-close");
    setTimeout(function() {
        modalc.style.visibility = "hidden";
        modal.classList.toggle("actives");
    }, 900)

});
cerrar1.addEventListener("click", function() {
    modal1.classList.toggle("modal-close");
    setTimeout(function() {
        modalc.style.visibility = "hidden";
        modal1.classList.toggle("actives");
    }, 900)
});
cerrar2.addEventListener("click", function() {
    modal2.classList.toggle("modal-close");
    setTimeout(function() {
        modalc.style.visibility = "hidden";
        modal2.classList.toggle("actives");
    }, 900)
});