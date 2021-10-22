let handler = async (m, { conn, text, args}) => {
  if (!text) return m.reply('Ulangi dengan menambahkan teks\n*Contoh* : /phlogo Lexa|Bot')
  ge = text
  l = ge.split("|")[0];
  r = ge.split("|")[1];
    m.reply('Silahkan tunggu')
  conn.sendFile(m.chat, `https://api.zeks.me/api/phlogo?apikey=apivinz&text1=${l}&text2=${r}`, 'phlogo.png', '▢ *Pornhub Logo*', m)
}

handler.help = ['Phlogo <text>|<text>']
handler.tags = ['nulis']
handler.command = ['phlogo']
handler.limit = true

module.exports = handler