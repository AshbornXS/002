let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
      // -- thumbnail menu
    pp = await (await fetch('https://telegra.ph/file/7c0b1068736040b515d81.jpg')).buffer()
data = fs.readFileSync('./result/fml.js');
		list = JSON.parse(data);
		random = Math.floor(Math.random() * list.length);
    let json = list[random]
    conn.fakelnk(m.chat, `*▢ FUCK MY LIFE*\n“${json.result.fml}”`, 'Follow me on Instagram\nCLICK HERE !', pp, m)
}
handler.help = ['Fml']
handler.tags = ['random']
handler.command = /^fml$/i
handler.premium = false

module.exports = handler
