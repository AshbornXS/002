let limit = 10
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `exemplo:\n${usedPrefix + command} Link Yt`
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  m.reply(isLimit ? `*[ MUSIC PLAYER ]*
▢ *Título:* ${title}
▢ *Tamanho:* ${filesizeF}

Download sendiri menggunakan link dibawah: ${dl_link}` : 'Por favor, espere')
 if(!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `*[ MUSIC PLAYER ]*\n▢ *Título:* ${title}\n▢ *Tamanho:* ${filesizeF}`, m, null, { asDocument: chat.useDocument, mimetype: 'audio/mp4'
  })
}

handler.command = ['ytd']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

