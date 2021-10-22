let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
let pp = await (await fetch('https://telegra.ph/file/7c0b1068736040b515d81.jpg')).buffer()
data = fs.readFileSync('./result/senja.js');
		list = JSON.parse(data);
		random = Math.floor(Math.random() * list.length);
    let json = list[random]
    conn.fakelnk(m.chat, `*▢ SENJA*\n“${json.result.message}”`, 'Follow me on Instagram\nCLICK HERE !', pp, m)
}
handler.help = ['Senja']
handler.tags = ['random']
handler.command = ['senja']
handler.premium = false

module.exports = handler
