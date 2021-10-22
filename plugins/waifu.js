let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'ErroFEITO EM ERPAN 1140 COLABORA COM BTS!'
  conn.sendFile(m.chat, json.url, '', '', m)
}
handler.help = ['Waifu']
handler.tags = ['nime']
handler.command = /^(waifu)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
