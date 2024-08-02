const { addKeyword } = require('@bot-whatsapp/bot');
const { Palabras, PalabrasOpciones } = require('../Constant/flowPrincipal');

const flowPrincipal = addKeyword(Palabras)
    .addAnswer("Hola, Gracias por Comunicarte con SmartLinkRD")
    .addAnswer("¿En qué podemos ayudarte hoy?")
    .addAnswer(
        ["Servicios de SmartLinkRD", "1-Asesoría informática", "2-Soporte técnico", "3-Desarrollo de software", "4-Páginas web", "5-Diseño gráfico"], 
        { capture: true },
        (ctx, { fallBack }) => {
            const found = PalabrasOpciones.some(opcion => ctx.body.includes(opcion));
            if (!found) {
                return fallBack();
            }
        }
    );

module.exports = flowPrincipal;
