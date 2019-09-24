const opts = {
  base: {
    demand: true,
    alias: "b"
  },
  limite: {
    alias: "l",
    default: 10
  }
};

const argv = require("yargs")
  .command("listar", "Imprimir base en consola", opts)
  .command("crear", "Crear tabla de multiplicar", opts)
  .help().argv;

module.exports = {
  argv
};
