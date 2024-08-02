const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowPrincipal = require('./src/Flow/flowPrincipal')
const { flowAsesoriaInformatica, flowSoporteTecnico, flowDesarrolloSoftware, flowPaginasWeb, flowDisenoGrafico } = require('./src/Flow/FlowServicios')

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, flowAsesoriaInformatica, flowSoporteTecnico, flowDesarrolloSoftware , flowDisenoGrafico, flowPaginasWeb, flowDisenoGrafico])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
