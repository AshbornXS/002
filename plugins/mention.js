let handler = async (m, { conn, text }) => {
  if (!text) throw 'Tidak ada teks'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['Notif <teks>']
handler.tags = ['group']

handler.command = /^notif$/i

module.exports = handler
