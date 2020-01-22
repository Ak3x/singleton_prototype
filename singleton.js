var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.getIntance = function () {
        if (Persona.instance == null) {
            Persona.instance = new Persona();
        }
        return this.instance;
    };
    Persona.instance = null;
    return Persona;
}());
var mainSingleton = function () {
    /*let p1 : Persona = new Persona()
    let p2 : Persona = new Persona()
    p1.nombre = "Pepito"
    p2.nombre = "Juanito"*/
    var p3 = Persona.getIntance();
    var p4 = Persona.getIntance();
    p3.nombre = "Luisito";
    p4.nombre = "Claudia";
    console.log("Nombre :  " + p3.nombre);
};
mainSingleton();
