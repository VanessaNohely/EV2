const selectTurno = document.getElementById("turno");
const inputHoras = document.getElementById("horas");
const inputTarifa = document.getElementById("pago");
const inputResultado = document.getElementById("sueldo");
const btnCalcularSueldo = document.getElementById("calcular");
const btnResetear = document.getElementById("limpiar");

btnCalcularSueldo.addEventListener("click", function(e) {
    e.preventDefault();

    let tipoTurno = selectTurno.value.toLowerCase().trim();
    let numHoras = parseFloat(inputHoras.value);
    let cuotaHora = parseFloat(inputTarifa.value);

    if (inputHoras.value.trim() === "" ||
        inputTarifa.value.trim() === "" ||
        !Number.isFinite(numHoras) ||
        !Number.isFinite(cuotaHora) ||
        numHoras < 0 || cuotaHora < 0) {
        alert("Ingresa horas y pago por hora válidos.");
        return;
    }

    if (tipoTurno === "matutino") {
        cuotaHora = cuotaHora;
    } else if (tipoTurno === "vespertino") {
        cuotaHora = cuotaHora * 1.03;
    } else if (tipoTurno === "nocturno") {
        cuotaHora = cuotaHora * 2;
    } else {
        alert("El turno ingresado no es válido.");
        return;
    }

    let montoTotal = numHoras * cuotaHora;

    inputResultado.value = montoTotal.toFixed(2);
});

btnResetear.addEventListener("click", function(e) {
    e.preventDefault();

    selectTurno.value = "";
    inputHoras.value = "";
    inputTarifa.value = "70";
    inputResultado.value = "";

    selectTurno.focus();
});