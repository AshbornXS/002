
let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
    title: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.thumbnail.genius) throw json
  conn.sendFile(m.chat, json.thumbnail.genius, '', `▢ *${json.title}*
${json.author}\n
${json.lyrics}\n\n
${json.links.genius}
`, m)
}
handler.help = ['Lirik'].map(v => v + ' <Apa>')
handler.tags = ['other']
handler.command = /^(lirik|lyrics|lyric)$/i

module.exports = handler
