let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, text)
}

handler.help = ['Say <text>']
handler.tags = ['fun']
handler.command = ['say']

module.exports = handler