let handler = async (m, { conn, text, args}) => {
  if (!text) return m.reply('Repita adicionando texto\n*Exemplo* : /phlogo Lexa|Bot')
    ge = text
  l = ge.split("|")[0];
  r = ge.split("|")[1];
    m.reply('Por favor, espere')
  conn.sendFile(m.chat, `https://api.zeks.me/api/watercolour?apikey=apivinz&text1=${l}&text2=${r}`, 'phlogo.png', '▢ *Water Colour*', m)
  }

handler.help = ['Water <text>|<text>']
handler.tags = ['escrever']
handler.command = ['water']
handler.limit = true

module.exports = handler