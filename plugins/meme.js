let fs = require('fs')
let handler = async (m, { conn }) => {
  data = fs.readFileSync('./result/meme.js');
    m.reply('Silahkan tunggu')
		list = JSON.parse(data);
		random = Math.floor(Math.random() * list.length);
    let json = list[random]
    conn.sendFile(m.chat, json.result, 'meme.jpg', ``.trim(), m)
}

handler.help = ['Meme']
handler.tags = ['pict']

handler.command = /^(meme)$/i

handler.group = true

module.exports = handler
