const fs = require("fs");

let listarTabla = (base, limite) => {
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};

let crearTabla = (base, limite) => {
  return new Promise((res, rej) => {
    if (!Number(base)) {
      rej(`El valor ingresado '${base}' no es un número`);
      return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
      if (err) {
        rej(err);
      } else {
        res(`tabla-${base}.txt`);
      }
    });
  });
};

module.exports = {
  crearTabla,
  listarTabla
};
