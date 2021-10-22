let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `⟳ Ulangi dengan menambahkan judul lagu`
  let chat = global.db.data.chats[m.chat]
  let res = await fetch(global.API('pencarikode', '/download/joox', { search: text }, 'apikey'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let { judul, artist, album, img_url, mp3_url, filesize, duration } = json.result
capt = `*[ JOOX ]*\n\n▢ *Judul* : ${artist} - ${judul}\n▢ *Album* : ${album}\n▢ *Ukuran* : ${filesize}`
  await conn.sendFile(m.chat, img_url, '', capt, m)
  await conn.sendFile(m.chat, mp3_url, `${artist}.mp3`, capt, m, null, {
  asDocument: chat.useDocument, mimetype: 'audio/mp4'
})
}
handler.help = ['Joox <query>']
handler.tags = ['downloader']
handler.command = /^(joox)$/i

module.exports = handler
