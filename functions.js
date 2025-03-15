async function handleStickerCreation(client, msg, from) {
    if (msg.hasQuotedMsg) {
        await processQuotedMessage(client, msg, from)
    } else if (msg.type === "image") {
        await processImageMessage(client, msg, from)
    } else {
        msg.reply("Formato de arquivo não reconhecido.")
    }
}

async function processQuotedMessage(client, msg, from) {
    const quotedMsg = await msg.getQuotedMessage()
    const attachmentData = await quotedMsg.downloadMedia()
    sendSticker(client, from, attachmentData)
}

async function processImageMessage(client, msg, from) {
    const receivedImage = await msg.downloadMedia()
    sendSticker(client, from, receivedImage);
}

function sendSticker(client, from, media) {
    client.sendMessage(from, media, {
        sendMediaAsSticker: true,
        stickerName: "Bot do Self",
    });
}

function isFrankWorking() {
    const lastFrankWorked = new Date('2025-03-15').setHours(0,0,0,0)
    const currDate = new Date().setHours(0,0,0,0)
    const diffDays = Math.abs((currDate - lastFrankWorked) / (1000 * 60 * 60 * 24))

    return diffDays % 2 === 0;
}

module.exports = {
    handleStickerCreation,
    isFrankWorking
};
