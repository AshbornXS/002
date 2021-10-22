let handler = async (m, { conn, text}) => {
  if (!text) return m.reply('Ulangi dengan menambahkan teks\n*Contoh* : /phlogo Lexa|Bot')
  m.reply('Silahkan tunggu')
  conn.sendFile(m.chat, `https://api.zeks.me/api/gplaybutton?apikey=apivinz&text=${text}`, 'phlogo.png', '▢ *Gold PlayButton*', m)
}

handler.help = ['Gplaybutton <text>']
handler.tags = ['nulis']
handler.command = ['gplaybutton']
handler.limit = true

module.exports = handler