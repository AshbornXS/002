let yts = require('yt-search')
let handler = async (m, { text }) => {
  if (!text) throw 'Pesquisa?'
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
▢ ${v.title}
▢ *Link* : ${v.url}
▢ *Duração* : ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
${v.subCountLabel} (${v.subCount}) Inscritos
${v.videoCount} vídeos
`.trim()
    }
  }).filter(v => v).join('\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['', 'earch'].map(v => 'Yts' + v + ' <procurar>')
handler.tags = ['other']
handler.command = /^yts(earch)?$/i

module.exports = handler
