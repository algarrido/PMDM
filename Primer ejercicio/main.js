var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        this.personas = [];
        var botonAñadir = document.getElementById("botonAñadir");
        botonAñadir.addEventListener("click", function (e) { return _this.añadirAlArray(); });
        var botonImprimir = document.getElementById("botonImprimir");
        botonImprimir.addEventListener("click", function (e) { return _this.mostrarArray(); });
    }
    Main.prototype.añadirAlArray = function () {
        if (document.getElementById("inputNombre").value != "" &&
            document.getElementById("inputEdad").value != "") {
            var persona = {
                nombre: document.getElementById("inputNombre").value,
                edad: +document.getElementById("inputEdad").value
            };
            console.log("añadido");
            this.personas.push(persona);
            document.getElementById('inputNombre').value = "";
            document.getElementById('inputEdad').value = "";
            alert("Añadido correctamente");
        }
        else {
            console.log("Rellena los campos");
        }
    };
    Main.prototype.mostrarArray = function () {
        console.log("Mostrar >");
        console.log(this.personas);
    };
    return Main;
}());
var app = new Main();
