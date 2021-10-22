const hx = require("hxz-api");
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
let handler = async(m, { conn, usedPrefix, command }) => {
        inic = ["mochi peach cats","sticker mochi peach cats"]
        inid = inic[Math.floor(Math.random() * inic.length)]
        pin = await hx.pinterest(inid);
        let pint = pin[Math.floor(Math.random() * pin.length)];
        pinter = await getBuffer(pint)
  m.reply('Silahkan tunggu')
  if (!pinter) return m.reply('Gagal')
  conn.sendButtonImg(m.chat, pinter, 'Result from Pinterest', `Klik untuk foto selanjutnya\nhttps://www.instagram.com/mrf.zvx`, 'Next', '.cutecat', m)
}
handler.help = ['Cutecat']
handler.tags = ['pict']
handler.command = ['cutecat']
handler.limit = true
module.exports = handler
