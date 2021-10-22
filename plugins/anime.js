let fs = require('fs')
const axios = require("axios");
const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

let handler = async(m, { conn }) => {
  data = fs.readFileSync('./result/anime.js');
  m.reply('Silahkan tunggu')
		list = JSON.parse(data);
		random = Math.floor(Math.random() * list.length);
    let json = list[random]
    anim = await getBuffer(json.img)
  conn.sendButtonImg(m.chat, anim, json.nama, `Klik untuk foto selanjutnya\nhttps://www.instagram.com/mrf.zvx`, 'Next', '.rananime', m)
}

handler.help = ['Rananime']
handler.tags = ['nime']
handler.command = ["rananime"]
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler