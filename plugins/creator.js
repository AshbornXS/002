let fs = require('fs')
let handler = async (m, { conn, command, text }) => {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
nomor = '6282223014661@s.whatsapp.net'
let pp = await (await fetch('https://telegra.ph/file/7c0b1068736040b515d81.jpg')).buffer()
const been = {
  text: `@${nomor.split('@')[0]}, Nih Owner ku, chat aja kalo ada perlu`,
   contextInfo: {
      mentionedJid: [nomor]
}
}
conn.fakeStatus(m.chat, been, 'IG : Mrf.zvx\nWhatsapp BOT : Lexa V4', owner)
//conn.fakelnkwa(m.chat, been, 'tes', pp, m )
}
handler.help = ['Owner']
handler.tags = ['main']

handler.command = /^(owner|creator)$/i

module.exports = handler
