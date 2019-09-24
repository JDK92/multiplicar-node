const colors = require("colors");

const { argv } = require("./config/yargs");

const { crearTabla, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;

  case "crear":
    crearTabla(argv.base, argv.limite)
      .then(tabla => console.log(`Tabla creada: ${tabla}`))
      .catch(err => console.log(err));
    break;

  default:
    console.log("Comando no reconocido");
}
