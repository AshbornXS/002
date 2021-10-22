let handler = async (m, { conn }) => {

conn.send2Button(m.chat, 'Iya lexa disini butuh bantuan ?', 'Option Bot', 'Menu', '.menu', 'Info', '.info')

}

handler.customPrefix = /^lexa|Lexa|6281511024915@s\.whatsapp\.net?$/i
handler.command = new RegExp
module.exports = handler
