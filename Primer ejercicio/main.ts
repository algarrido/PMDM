interface Persona{
    nombre: string,
    edad: number;
}
class Main{
    personas : Persona[] = [];
    constructor() {
        let botonAñadir = document.getElementById("botonAñadir"); 
        botonAñadir.addEventListener("click", (e:Event) => this.añadirAlArray());
        
        let botonImprimir = document.getElementById("botonImprimir");
        botonImprimir.addEventListener("click", (e:Event) => this.mostrarArray());
    }

    añadirAlArray(){
        if((<HTMLInputElement>document.getElementById("inputNombre")).value != "" && 
        (<HTMLInputElement>document.getElementById("inputEdad")).value != ""){
            let persona: Persona = {
                nombre: (<HTMLInputElement>document.getElementById("inputNombre")).value,
                edad: +(<HTMLInputElement>document.getElementById("inputEdad")).value
            }
            console.log("añadido")
            this.personas.push(persona);
            (<HTMLInputElement>document.getElementById('inputNombre')).value = "";
            (<HTMLInputElement>document.getElementById('inputEdad')).value = "";

            alert("Añadido correctamente")
        }
        else {
            console.log("Rellena los campos");
        }
        
    }
    mostrarArray(){
        console.log("Mostrado correctamente");
        console.log(this.personas);
    }

}

let app: Main = new Main();

