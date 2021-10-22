let handler = async (m, { conn, text}) => {
  if (!text) return m.reply('Ulangi dengan menambahkan teks\n*Contoh* : /phlogo Lexa|Bot')
  m.reply('Silahkan tunggu')
  conn.sendFile(m.chat, `https://api.zeks.me/api/splaybutton?apikey=apivinz&text=${text}`, 'phlogo.png', '▢ *Silver PlayButton*', m)
}

handler.help = ['Splaybutton <text>']
handler.tags = ['nulis']
handler.command = ['splaybutton']
handler.limit = true

module.exports = handler