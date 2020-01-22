class Persona
{
    private static instance : Persona | null = null 
    //poner por defecto que es null (con el static se hacer propiedad de clase)
    nombre : string //props de isntancia
    edad  : number //props de isntancia

    private constructor(){}

    static getIntance()
    {
        if(Persona.instance ==null)
        {
            Persona.instance= new Persona()
        }
        return this.instance
    }
}

let mainSingleton = () => {
    /*let p1 : Persona = new Persona() 
    let p2 : Persona = new Persona()
    p1.nombre = "Pepito"
    p2.nombre = "Juanito"*/
    let p3 = Persona.getIntance()
    let p4 = Persona.getIntance()
    p3.nombre = "Luisito"
    p4.nombre = "Claudia"
    console.log(`Nombre :  ${p3.nombre}`)

}
mainSingleton()