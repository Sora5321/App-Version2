const fs = require('fs');
let tareas = fs.readFileSync('./tareas.json','utf-8');

let FuncionesDeTareas={
    archivo:'./tareas.json',
    leerJson: function(){
        let tareasParseadas = JSON.parse(tareas)
        let tareas = fs.readFileSync(this.archivo,'utf-8');
        return tareasParseadas
    },
    agregarTarea: function (titulo , estado){
        let nuevaTarea ={
            titulo:titulo,
            estado:estado,
        }
        let TareasAnteriores = this.leerJson()

        TareasAnteriores.push(nuevaTarea)

        this.escribirjson(TareasAnteriores)
    },
    escribirjson:function (data) {
        let NuevoJson = JSON.stringify(data)
        fs.writeFileSync(this.archivo, NuevoJson, 'utf-8')
     
    },
    deshacer:function () {
        let tareas =this.leerJson();
        tareas.pop()
        this.escribirjson(tareas)
        
    },
    filtrarPorEstado:function (estado) {
        let tareas=this.leerJson();
        let tareasFiltradasPorEstado = tareas.filter((tarea)=> tarea.estado == estado);
        return tareasFiltradasPorEstado
        
    }
    
}

module.exports = FuncionesDeTareas