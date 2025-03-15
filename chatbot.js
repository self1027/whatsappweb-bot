const qrcode = require('qrcode-terminal');
const { Client, MessageMedia } = require('whatsapp-web.js');
const client = new Client();
const functions = require("./functions")

client.on('qr', qr => {
  qrcode.generate(qr, {small: true})
});

client.on('ready', () => {
  console.log('Tudo certo! WhatsApp conectado.')
}); 

client.initialize();

client.on('message', async msg => {
  console.log("Mensagem recebida");
  if (msg.body === "!!") {
    try {
      await functions.handleStickerCreation(client, msg, msg.from)
    } catch (error) {
      msg.reply("Não consigo alcançar imagens muito antigas.")
    }
  }
})

client.on('message_create', async msg => {
  if (msg.body === "!!") {
    try {
      await functions.handleStickerCreation(client, msg, msg.to)
    } catch (error) {
      msg.reply("Não consigo alcançar imagens muito antigas.")
    }
  }

  if (msg.body.toLowerCase() === '!frank') {
    let resposta = functions.isFrankWorking() ? 'O Frank *vai* trabalhar hoje' : 'O Frank *não vai* trabalhar hoje'
    client.sendMessage(msg.to, resposta)
  }
})