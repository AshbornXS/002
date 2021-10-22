let handler = function (m) {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw false
  if (!isBaileys) throw 'Itu bukan pesan ku'
  this.deleteMessage(chat, {
    fromMe,
    id,
    remoteJid: chat
  })
}
handler.help = ['Delete']
handler.tags = ['main']

handler.command = /^del(ete)?$/i

module.exports = handler
