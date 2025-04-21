const cron = require("node-cron");

let times = 0;

cron.schedule("1-59/5 * * * * *", () => {
  times++;
  console.log("Tick cada 5 segundos", times);
});

console.log("Inicio de la APK");

// Mantener el proceso de Node.js en ejecución indefinidamente
setInterval(() => {}, 1000 * 60 * 60); // Ejecutar cada hora (no hace nada)
