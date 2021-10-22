let handler = async (m, { conn, text}) => {
  if (!text) return m.reply('Ulangi dengan menambahkan teks\n*Contoh* : /phlogo Lexa|Bot')
  m.reply('Silahkan tunggu')
  conn.sendFile(m.chat, `https://api.zeks.me/api/sandw?apikey=apivinz&text=${text}`, 'phlogo.png', '▢ *Sand Written*', m)
}

handler.help = ['Sand <text>']
handler.tags = ['nulis']
handler.command = ['sand']
handler.limit = true

module.exports = handler