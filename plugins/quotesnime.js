let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = await (await fetch('https://telegra.ph/file/7c0b1068736040b515d81.jpg')).buffer()
		list = JSON.parse(data);
		random = Math.floor(Math.random() * list.length);
    let json = list[random]
    conn.fakelnk(m.chat, `*▢ QUOTES ANIME*\n‣ *Anime* : ${json.result.anime} (${json.result.episode})\n‣ *Character* : ${json.result.char}\n“${json.result.quotes}”`, 'Follow me on Instagram\nCLICK HERE !', pp, m)
}
handler.help = ['Quotesnime']
handler.tags = ['random']
handler.command = /^quotesnime$/i
handler.premium = false

module.exports = handler