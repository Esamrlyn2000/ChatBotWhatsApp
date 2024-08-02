const { addKeyword } = require('@bot-whatsapp/bot');
const { Palabras, PalabrasOpciones } = require('../Constant/flowPrincipal');

const flowAsesoriaInformatica = addKeyword(["1", "asesoria informática"])
    .addAnswer("Has elegido Asesoría Informática. ¿En qué te podemos ayudar específicamente?");

const flowSoporteTecnico = addKeyword(["2", "soporte tecnico"])
    .addAnswer("Has elegido Soporte Técnico. Por favor, describe tu problema.");

const flowDesarrolloSoftware = addKeyword(["3", "desarrollo de software"])
    .addAnswer("Has elegido Desarrollo de Software. Cuéntanos más sobre tu proyecto.");

const flowPaginasWeb = addKeyword(["4", "paginas web"])
    .addAnswer("Has elegido Páginas Web. ¿Qué tipo de página necesitas?");

const flowDisenoGrafico = addKeyword(["5", "diseño grafico"])
    .addAnswer("Has elegido Diseño Gráfico. ¿Qué tipo de diseño necesitas?");


module.exports = { flowAsesoriaInformatica, flowSoporteTecnico, flowDesarrolloSoftware, flowPaginasWeb, flowDisenoGrafico};