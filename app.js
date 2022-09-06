const process = require('process');
const funcionesDeTareas = require('./funcionesDeTareas');
let action = process.argv[2] && process.argv[2].toLowerCase();

switch (action) {
    case "listar": 
        let listaDeTareas = funcionesDeTareas.leerJson()
        for (let i = 0; i < listaDeTareas.length; i++){
            console.log(`Tarea: ${listaDeTareas[i].titulo} \nEstado: ${listaDeTareas[i].estado}`)
            console.log("-----------------------------------------------------")
        };
        break
    case "agregar":
        let titulo = process.argv[3];
        let estado = process.argv[4];
        funcionesDeTareas.agregarTarea(titulo, estado)
        break
    case "deshacer":
        funcionesDeTareas.deshacer()
        break
        case "filtrar":
            let filtro = process.argv[3]
            let tareasfiltradas = FuncionesdeTareas.filtrarPorEstado(filtro)
            console.log(`Tareas filtradas por ${filtro}`)
            console.log("_________________________")
            tareasfiltradas.forEach(tarea => {
                console.log(`tarea:${tarea.titulo}`)
                console.log("###################");
            });
            break


    case undefined:
        console.log("Atención tienes que pasar una acción");
        break
    default: 
        console.log("No entiendo que quieres hacer, ponete las pilas")    
}
