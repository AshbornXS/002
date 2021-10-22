let fs = require('fs')
let handler = async (m, { conn, usedPrefix }) => {
  data = fs.readFileSync('./result/asupan.js');
    m.reply('Silahkan tunggu')
		list = JSON.parse(data);
		random = Math.floor(Math.random() * list.length);
    let json = list[random]
    conn.sendFile(m.chat, json.asupan, 'asupan.mp4', `Asupannya tuan`.trim(), m)
}
handler.help = ['Asupan']
handler.tags = ['premium']
handler.command = ['asupan']
handler.premium = true

module.exports = handler