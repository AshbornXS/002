let fetch = require('node-fetch');
let handler = async (m, { text }) => {
  if (!text) return conn.reply(m.chat, 'hai', m)
  try {
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
  let json = await res.json()
  let tes = json.success
    m.reply(tes)
  } catch {
    m.reply('Simi nggk paham :(')
  }
}
handler.help = ['Simi'].map(v => v + ' <teks>')
//handler.customPrefix = ['Lexa']
handler.tags = ['main']
handler.command = /^((sim)?simi|simih|bot)$/i
//handler.command = new RegExp
module.exports = handler



