let fs = require('fs')
let handler = async (m, { conn, usedPrefix }) => {
  data = fs.readFileSync('./result/nickepep.js');
    m.reply('Silahkan tunggu')
		list = JSON.parse(data);
		random = Math.floor(Math.random() * list.length);
    let json = list[random]
    teks = `▢ *NICK FF*\n\n`
				for (let lap of json.result) {
					teks += `‣ ${lap}\n`
				}
				teks  += `\nResult from database`
				m.reply(teks.trim())
}

handler.help = ['Nickff']
handler.tags = ['internet']
handler.command = /^nickff|epep?$/i

module.exports = handler
