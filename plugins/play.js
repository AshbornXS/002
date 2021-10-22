const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let timeout = 20000
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  conn.play = conn.play ? conn.play : {}
    let id = m.chat
    if (id in conn.play) {
        conn.reply(m.chat, 'Bot masih dalam mode download, silahkan tunggu sampai selesai', conn.play[id][0])
        throw false
    }
  if (!text) throw `▢ Ulangi dengan menambahkan judul lagu\ncontoh :\n*${usedPrefix + command} Pedih*`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all
  var tes1 = vid[0].url
  var tes2 = vid[1].url
  var tes3 = vid[2].url;
  
     // m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)

caption = `▢ *Music Match*

Download 1 
▢ *Judul* : ${vid[0].title}
▢ *Durasi* : ${vid[0].timestamp}
${vid[0].views} View on YouTube

Download 2
▢ *Judul* : ${vid[1].title}
▢ *Durasi* : ${vid[1].timestamp}
${vid[1].views} View on YouTube

Download 3
▢ *Judul* : ${vid[2].title}
▢ *Durasi* : ${vid[2].timestamp}
${vid[2].views} View on YouTube`

conn.play[id] = [
  await conn.send3ButtonLoc(m.chat, await (await fetch(vid[0].thumbnail)).buffer(), caption.trim(), 'Silahkan pilih musik yang ingin di download','⎙ DOWNLOAD 1', `.ytd ${tes1}`, '⎙ DOWNLOAD 2', `.ytd ${tes2}`, '⎙ DOWNLOAD 3', `.ytd ${tes3}`),
        setTimeout(() => {
            delete conn.play[id]
        }, timeout)
]
}
handler.help = ['Play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(p|play)$/i

handler.exp = 0

module.exports = handler

